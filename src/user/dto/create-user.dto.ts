import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
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
        description: "Hashed password",
        type: String,
        required: true,
        default: "qwerty123"
    })
    password: string
	
}
