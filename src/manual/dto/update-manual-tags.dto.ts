import { PartialType } from '@nestjs/mapped-types';
import { CreateManualDto } from './create-manual.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateManualTagsDto extends PartialType(CreateManualDto) {
	@ApiProperty({ description: "Manual tags list", default: "", type: [String], required: false })
	tags: [string]
}
