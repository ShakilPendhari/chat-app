import { Model, MongoosePlugin } from "@tsed/mongoose";
import { CustomBaseEntity } from "./CustomBaseEntity.js";
import { Property, Required } from "@tsed/schema";
import MongooseDelete from "mongoose-delete";


@Model({
  schemaOptions: {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  },
})
@MongoosePlugin(MongooseDelete, {
  overrideMotheds: true, // Override default methods to include soft delete
})
 
export class Chat extends CustomBaseEntity {
    @Property()
  @Required()
  participants: string[]; // userIds

  @Property()
  @Required()
  messages: {
    senderId: string;
    content: string;
    type: "text" | "image" | "file";
    createdAt: Date;
  }[];
}
