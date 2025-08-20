import { Model, Unique, MongoosePlugin } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import { CustomBaseEntity } from "./CustomBaseEntity.js";
import MongooseDelete from "mongoose-delete";

@Model({
  schemaOptions: {
    timestamps: true,
  },
})
@MongoosePlugin(MongooseDelete, {
  overrideMethods: true,
})
export class User extends CustomBaseEntity {
  @Unique()
  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  firebaseUid: string;

  @Property()
  displayName?: string;

  @Property()
  avatarUrl?: string;
}
