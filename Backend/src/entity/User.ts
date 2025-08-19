import { Model, ObjectID, Unique, MongoosePlugin } from "@tsed/mongoose";
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
  @ObjectID("id")
  _id: string;

  @Unique()
  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  firebaseUid: string;

  @Property()
  displayName?: string;
  avatarUrl?: string;
}
