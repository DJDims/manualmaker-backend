import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
	@IsString()
    @ApiProperty({
        description: "Username",
        type: String,
        required: true,
        default: "New user"
    })
    username: string
 
    @IsString()
    @IsEmail({}, { message: 'Invalid email format' })
    @ApiProperty({
        description: "Email",
        type: String,
        required: true,
        default: "new.user@example.com"
    })
    email: string
    
    @IsString()
    @ApiProperty({
        description: "Password",
        type: String,
        required: true,
        default: "qwerty123"
    })
    password: string
    
    @IsString()
    @ApiProperty({
        description: "Confirm password",
        type: String,
        required: true,
        default: "qwerty123"
    })
    confirmPassword: string
}