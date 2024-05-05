import {
	Controller,
	Get,
	Post,
	Body,
	UseGuards,
	Request
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "../guards/auth.guard";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import {
	ApiTags,
	ApiOperation,
	ApiResponse,
	ApiBearerAuth
} from "@nestjs/swagger";
import { IsUserExistsGuard } from "src/guards/is-user-exists.guard";
import { IsUserNotExistsGuard } from "src/guards/is-user-not-exists.guard";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
	constructor(private authService: AuthService) {}

	@ApiOperation({ summary: "Register a new user" })
	@ApiResponse({ status: 201, description: "Registered" })
	@ApiResponse({ status: 409, description: "Conflict" })
	@UseGuards(IsUserNotExistsGuard)
	@Post("register")
	register(@Body() registerDto: RegisterDto) {
		return this.authService.register(registerDto);
	}

	@ApiOperation({ summary: "Login as existing user" })
	@ApiResponse({ status: 201, description: "Logined" })
	@ApiResponse({ status: 401, description: "Unauthorized" })
	@UseGuards(IsUserExistsGuard)
	@Post("login")
	login(@Body() loginDto: LoginDto) {
		return this.authService.login(loginDto);
	}

	// @Post('logout')
	// logout() {
	// 	return this.authService.logout();
	// }
}
