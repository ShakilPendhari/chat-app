import { Middleware, Next, Context } from "@tsed/common";
import { Unauthorized } from "@tsed/exceptions";
import { LRUCache as LRU } from "lru-cache";
import type { DecodedIdToken } from "firebase-admin/auth";
import type { CurrentUser } from "../types/auth.js";
import { FirebaseAdmin } from "../services/FirebaseAdmin.js";

const cache = new LRU<string, DecodedIdToken>({
  max: 1000,
  ttl: 5 * 60 * 1000 // default 5 minutes; we'll override per-token below
});

@Middleware()
export class AuthMiddleware {
  constructor(private firebase: FirebaseAdmin) {}

  private extractBearerToken(ctx: Context): string | null {
    const authHeader = ctx.request.headers["authorization"];
    if (typeof authHeader === "string") {
      const [scheme, token] = authHeader.split(" ");
      if (scheme?.toLowerCase() === "bearer" && token) return token;
    }
    // Optional: support HttpOnly cookie fallback if you ever move to server sessions
    const cookieToken = ctx.request.cookies?.authToken;
    return cookieToken || null;
  }

  async use(@Context() ctx: Context, @Next() next: Next) {
    const token = this.extractBearerToken(ctx);
    if (!token) {
      throw new Unauthorized("Missing Bearer token");
    }

    let decoded = cache.get(token);

    try {
      if (!decoded) {
        // checkRevoked = false for speed; set to true if you need global sign-out on revoke
        decoded = await this.firebase.verifyIdToken(token, false);
        // set TTL to token's remaining lifetime (with 5s safety skew), capped at 15 minutes
        const msLeft = Math.max(decoded.exp! * 1000 - Date.now() - 5000, 0);
        const ttl = Math.min(msLeft, 15 * 60 * 1000);
        cache.set(token, decoded, { ttl });
      }

      const user: CurrentUser = {
        uid: decoded.uid,
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        claims: decoded
      };

      // Attach to Ts.ED context and request for downstream access
      ctx.set("auth", { user, token: decoded });
      (ctx.request as any).user = user;

      return next();
    } catch {
      // On failure (expired/invalid), force 401. Client should refresh token and retry.
      throw new Unauthorized("Invalid or expired token");
    }
  }
}
