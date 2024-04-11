import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/Login.dto';

@Injectable()
export class AuthService {
	constructor(private userService: UserService) { }

	async register(registerDto: RegisterDto) {

	}
	async login(loginDto: LoginDto) {

	}
	// async logout () {

	// }
}
