import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({unique: true})
    username: string;
    
    @Prop({unique: true})
    email: string;
    
    @Prop()
    password: string;

	@Prop({default:"user"})
	role: string;
    
    @Prop({default:"https://sun9-44.userapi.com/impf/c846419/v846419078/528c9/EW3P9agvXJw.jpg?size=2560x1396&quality=96&sign=39a73398fd915e2ccffa5388878d6a57&type=album"})
    avatar: string;
    
    @Prop()
    about: string;

    // @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
    @Prop()
    followers: [string];

    @Prop()
    following: [string];

    @Prop()
    pinned: [string];
    
	@Prop()
    marked: [string];
}

export const UserSchema = SchemaFactory.createForClass(User);