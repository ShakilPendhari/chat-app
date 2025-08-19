import { Model, ObjectID, MongoosePlugin } from "@tsed/mongoose";
import { Property, Required } from "@tsed/schema";
import { CustomBaseEntity } from "./CustomBaseEntity.js";
import MongooseDelete from "mongoose-delete";
import { InvitationStatus } from "src/config/enums/invitationStatus.js";

@Model({
  schemaOptions: {
    timestamps: true,
  },
})
@MongoosePlugin(MongooseDelete, {
  overrideMethods: true,
})
export class Invitation extends CustomBaseEntity {

  @Property()
  @Required()
  fromUserId: string;

  @Property()
  @Required()
  toUserId: string;

  @Property()
  @Required()
  status: InvitationStatus
}
