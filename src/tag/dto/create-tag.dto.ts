import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {
    @IsString()
    @ApiProperty({ description: "Tag name", default: "New tag", type: String, required: true })
    name: string

    @IsString()
    @ApiProperty({ description: "Tag background color", default: "FFFFFF", type: String, required: true })
    bgColor: string
    
    @IsString()
    @ApiProperty({ description: "Tag text color. True - white, false - black", default: false, type: Boolean, required: true })
    txColor: boolean
}
