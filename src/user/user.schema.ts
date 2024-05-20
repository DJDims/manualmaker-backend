import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
    @Prop({unique: true})
    username: string;
    
    @Prop({unique: true})
    email: string;
    
    @Prop()
    password: string;

	@Prop({default:"user"})
	role: string;
    
    @Prop({default:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f993868-5417-4268-9c23-1c6f0fc60b91/dfa0qwu-82486dd7-3149-4677-a533-86bb9799ab93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmOTkzODY4LTU0MTctNDI2OC05YzIzLTFjNmYwZmM2MGI5MVwvZGZhMHF3dS04MjQ4NmRkNy0zMTQ5LTQ2NzctYTUzMy04NmJiOTc5OWFiOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ess1ogBdTivAhWG9xsV1SjyuF43s8yomI9K3ZF_yDf8"})
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