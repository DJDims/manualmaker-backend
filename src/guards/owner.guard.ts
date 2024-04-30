import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from "@nestjs/common";

@Injectable()
export class OwnerGuard implements CanActivate {
	/**
	 * @param {ExecutionContext} context excecution context
	 * @returns {Promise<boolean>} return true when you're owner of requested resource
	 * @throws {ForbiddenException} throws when you're not owner of requested resource
	 */
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const ownerId = req.params.id;
		const userId = req.user.id;
		if (ownerId !== userId) throw new ForbiddenException()
		return true;
	}
}
