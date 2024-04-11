import { PartialType } from '@nestjs/mapped-types';
import { CreateTagDto } from './create-tag.dto';
import { IsOptional, IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTagDto extends PartialType(CreateTagDto) {
    @IsOptional()
    @IsString()
    @ApiProperty({ description: "Tag name", default: "New tag", type: String })
    name?: string

    @IsOptional()
    @IsString()
    @ApiProperty({ description: "Tag background color", default: "FFFFFF", type: String })
    bgColor?: string
    
    @IsOptional()
    @IsBoolean()
    @ApiProperty({ description: "Tag text color. True - white, false - black", default: false, type: Boolean })
    txColor?: boolean

}
