// src/services/UserService.ts
import { Injectable, Inject } from "@tsed/di";
import { UserRepository } from "../repositories/UserRepository.js";
import { User } from "../entity/User.js";


@Injectable()
export class UserService {
  @Inject(UserRepository)
  private userRepo: UserRepository;

  async getMe(userId: string): Promise<User | null> {
    return this.userRepo.findById(userId);
  }
}
