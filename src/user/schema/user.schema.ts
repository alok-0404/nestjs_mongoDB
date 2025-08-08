import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Address } from "./address.schema";

@Schema()
export class User extends Document {     //user class ko extend krna h document ke sath

    @Prop()
    name: string;

    @Prop({type: Address})  //yaha hamne embedding ka use kra yaha Adress jo address.user.ts se rha h
    address: Address;

}

export const userSchema = SchemaFactory.createForClass(User); //userSchema ko create krne ke liye SchemaFactory ka use kra