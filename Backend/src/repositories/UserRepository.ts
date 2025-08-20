import { Injectable } from "@tsed/di";
import { User } from "../entity/User.js";
import { Model } from "mongoose";

@Injectable()
export class UserRepository {
  constructor(private userModel: Model<User>) {}

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }
}
