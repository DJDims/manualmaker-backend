import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TagDocument = HydratedDocument<Tag>;

@Schema()
export class Tag {
    @Prop({unique: true})
    name: string;

    @Prop()
    bgColor: string;

    @Prop()
    txColor: boolean;
}

export const TagSchema = SchemaFactory.createForClass(Tag);