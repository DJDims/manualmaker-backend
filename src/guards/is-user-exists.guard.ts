import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class IsUserExistsGuard implements CanActivate {
	constructor(private userService: UserService) {}
	/**
	 * @param {ExecutionContext} context excecution context
	 * @returns {Promise<boolean>} return true when user with username or email exists
	 * @throws {UnauthorizedException} throws when user with username or email not exists
	 */
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const userByUsername = await this.userService.findByUsername(req.body.username);
		if (!userByUsername) throw new UnauthorizedException();
		// const userByEmail = await this.userService.findByEmail(req.body.email);
		// if (!userByEmail) throw new UnauthorizedException();
		return true;
	}
}
