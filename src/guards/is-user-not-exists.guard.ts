import { CanActivate, ConflictException, ExecutionContext, Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";

@Injectable()
export class IsUserNotExistsGuard implements CanActivate {
	constructor(private userService: UserService) {}
	/**
	 * @param {ExecutionContext} context excecution context
	 * @returns {Promise<boolean>} return true when user witch username or email exists
	 * @throws {ConflictException} throws when user witch username or email not exists
	 */
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const userByUsername = await this.userService.findByUsername(req.body.username);
		if (userByUsername) throw new ConflictException();
		const userByEmail = await this.userService.findByEmail(req.body.email);
		if (userByEmail) throw new ConflictException();
		return true;
	}
}
