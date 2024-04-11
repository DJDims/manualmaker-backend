import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsEmail, IsOptional } from "class-validator";
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Username",
        type: String,
        required: true,
        default: "New user"
    })
    username: string
 
    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "Hashed password",
        type: String,
        required: true,
        default: ""
    })
    password: string

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "User avatar",
        type: String,
        required: true,
        default: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f993868-5417-4268-9c23-1c6f0fc60b91/dfa0qwu-82486dd7-3149-4677-a533-86bb9799ab93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmOTkzODY4LTU0MTctNDI2OC05YzIzLTFjNmYwZmM2MGI5MVwvZGZhMHF3dS04MjQ4NmRkNy0zMTQ5LTQ2NzctYTUzMy04NmJiOTc5OWFiOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Ess1ogBdTivAhWG9xsV1SjyuF43s8yomI9K3ZF_yDf8"
    })
    avatar: string

    @IsString()
    @IsOptional()
    @ApiProperty({
        description: "User about text",
        type: String,
        required: true,
        default: ""
    })
    about: string
}
