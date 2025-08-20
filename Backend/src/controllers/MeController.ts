// src/controllers/rest/MeController.ts
import { Controller, Get, Req, UseAuth } from "@tsed/common";
import { Returns, Security } from "@tsed/schema";
import { UserService } from "../services/UserService.ts.js";
import { AuthMiddleware } from "../middleware/AuthMiddleware.js";
import { User } from "../entity/User.js";


@Controller("/me")
export class MeController {
  constructor(private userService: UserService) {}

  @Get("/")
  @UseAuth(AuthMiddleware) // Protect this route
  @Security("jwt") // For OpenAPI / Swagger
  @Returns(200, User)
  async getMe(@Req() req: Req & { user?: { id: string } }): Promise<User | null> {
    const userId = req.user?.id; // populated by AuthMiddleware
    if (!userId) {
      return null;
    }
    return this.userService.getMe(userId);
  }
}


