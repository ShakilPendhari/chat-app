import { Service } from "@tsed/di";
import * as admin from "firebase-admin";

/**
 * Initializes Firebase Admin exactly once.
 * Supports either GOOGLE_APPLICATION_CREDENTIALS or a base64 JSON in FIREBASE_SERVICE_ACCOUNT.
 */
@Service()
export class FirebaseAdmin {
  public auth: admin.auth.Auth;

  constructor() {
    if (admin.apps.length === 0) {
      if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        const json = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, "base64").toString("utf8");
        admin.initializeApp({
          credential: admin.credential.cert(JSON.parse(json))
        });
      } else {
        // Uses GOOGLE_APPLICATION_CREDENTIALS or default creds if available
        admin.initializeApp();
      }
    }
    this.auth = admin.auth();
  }

  verifyIdToken(token: string, checkRevoked = false) {
    return this.auth.verifyIdToken(token, checkRevoked);
  }
}
