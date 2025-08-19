import { ObjectID } from "@tsed/mongoose";
import { Property } from "@tsed/schema";


export class CustomBaseEntity {
    @ObjectID("id")
    _id: string;

    @Property()
    createdAt: Date = new Date();
    
    @Property()
    updatedAt: Date = new Date();
}