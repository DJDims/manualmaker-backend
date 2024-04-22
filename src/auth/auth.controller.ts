import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) { }

	@HttpCode(HttpStatus.OK)
	@ApiResponse({status: 200, description: 'Success'})
	@ApiResponse({status: 409, description: 'Conflict'})
	@ApiOperation({ summary: 'Register a new user' })
	@Post('register')
	register(@Body() registerDto: RegisterDto) {
		return this.authService.register(registerDto);
	}
	
	@HttpCode(HttpStatus.OK)
	@ApiResponse({status: 200, description: 'Success'})
	@ApiOperation({ summary: 'Login as existing user' })
	@Post('login')
	login(@Body() loginDto: LoginDto) {
		return this.authService.login(loginDto);
	}

	@UseGuards(AuthGuard)
	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}

	// @Post('logout')
	// logout() {
	// 	return this.authService.logout();
	// }
}
