import {
	Injectable,
	UnauthorizedException,
	ConflictException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../user/user.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/Login.dto";
import * as argon2 from "argon2";
import { CreateUserDto } from "src/user/dto/create-user.dto";

@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwtService: JwtService
	) {}

	async register(registerDto: RegisterDto) {
		if (registerDto.password === "" || registerDto.confirmPassword === "") throw new ConflictException(); 
		if (registerDto.password !== registerDto.confirmPassword) throw new ConflictException();

		return await this.userService.create(registerDto as CreateUserDto);
	}

	async login(loginDto: LoginDto) {
		const user = await this.userService.findByUsername(loginDto.username);
		const match = await argon2.verify(user.password, loginDto.password);
		if (!match) throw new UnauthorizedException();

		const payload = { userId: user.id, username: user.username };

		return { access_token: await this.jwtService.signAsync(payload) };
	}

	async profile() {
		return 'profile';
	}
	// async logout () {

	// }
}
