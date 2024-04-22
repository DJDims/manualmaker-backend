import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { IStep } from './interfaces';

export class CreateManualDto {
	@IsString()
	@ApiProperty({ description: "Manual title", default: "New manual", type: String, required: true })
	title: string

	@IsString()
	@ApiProperty({ description: "Manual author", default: "", type: String, required: true })
	author: string

	@IsString()
	@ApiProperty({ description: "Manual image", default: "", type: String, required: false })
	thumbnail: string

	@ApiProperty({ description: "Manual tags list", default: "", type: [Object], required: false })
	tags: [string]

	@ApiProperty({ description: "Manual steps", type: [Object], required: true })
	steps: [IStep]
}
