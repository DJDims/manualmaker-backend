import { IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
	@IsString()
	@ApiProperty({ description: "Username", default: "User", type: String, required: true })
	username: string

	@IsString()
	@ApiProperty({ description: "Password", default: "password", type: String, required: true })
	password: string
}