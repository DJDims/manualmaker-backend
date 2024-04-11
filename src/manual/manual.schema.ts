import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IStep } from './dto/interfaces';

export type TagDocument = HydratedDocument<Manual>;

@Schema()
export class Manual {
    @Prop({unique: true})
	title: string;

	@Prop()
	author: string

	@Prop()
	thumbnail: string

	@Prop()
	tags: [string]

	@Prop()
	steps: [IStep]
}

export const ManualSchema = SchemaFactory.createForClass(Manual);