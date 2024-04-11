import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({unique: true})
    username: string;
    
    @Prop({unique: true})
    email: string;
    
    @Prop()
    password: string;
    
    @Prop()
    avatar: string;
    
    @Prop()
    about: string;

    @Prop()
    followers: [string];

    @Prop()
    following: [string];
}

export const UserSchema = SchemaFactory.createForClass(User);