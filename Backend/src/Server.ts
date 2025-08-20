import { join } from "node:path";
import { Configuration } from "@tsed/di";
import { application } from "@tsed/platform-http";
import "@tsed/platform-log-request"; // remove this import if you don’t want log request
import "@tsed/platform-express"; // /!\ keep this import
import "@tsed/ajv";
import { config } from "./config/index.js";
import * as rest from "./controllers/rest/index.js";

import cors from "cors";
import helmet from "helmet";

@Configuration({
  ...config,
  acceptMimes: ["application/json"],
  httpPort: process.env.PORT || 8083,
  httpsPort: false, // CHANGE if needed
  mount: {
    "/rest": [...Object.values(rest)]
  },
  middlewares: [
    helmet(),
    cors({
      origin: (origin, cb) => {
        const allowed = (process.env.CORS_ORIGIN ?? "")
          .split(",")
          .map(s => s.trim())
          .filter(Boolean);

        if (!origin || allowed.length === 0 || allowed.includes(origin)) {
          return cb(null, true);
        }
        return cb(new Error("Not allowed by CORS"));
      },
      credentials: false, // we’re using Authorization header, not cookies
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"]
    }),
    "cookie-parser",
    "compression",
    "method-override",
    "json-parser",
    { use: "urlencoded-parser", options: { extended: true } }
  ],
  views: {
    root: join(process.cwd(), "../views"),
    extensions: {
      ejs: "ejs"
    }
  }
})
export class Server {
  protected app = application();
}
