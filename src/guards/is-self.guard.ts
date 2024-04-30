import {
	CanActivate,
	ExecutionContext,
	Injectable,
	BadRequestException
} from "@nestjs/common";

@Injectable()
export class IsSelfGuard implements CanActivate {
	/**
	 * @param {ExecutionContext} context excecution context
	 * @returns {Promise<boolean>} return true when you're perform an action on yourself
	 * @throws {BadRequestException} throws when you're perform an action not on yourself
	 */
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const targetId = req.params.id;
		const userId = req.user.userId;
		if (targetId !== userId) throw new BadRequestException();
		return true;
	}
}
