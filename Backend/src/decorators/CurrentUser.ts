import { UseParam, ParamTypes } from "@tsed/platform-params";
import type { CurrentUser } from "../types/auth.js";

/**
 * Access the user set by AuthMiddleware: ctx.get("auth.user")
 */
export function CurrentUser(): ParameterDecorator {
  return UseParam({
    paramType: ParamTypes.$CTX,
    expression: "auth.user",
  }) as ParameterDecorator;
}
