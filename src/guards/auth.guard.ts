import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(
		private jwtService: JwtService,
		private readonly configService: ConfigService
	) {}

	/**
	 * @param {ExecutionContext} context excecution context
	 * @returns {Promise<boolean>} return true when authorization was successful
	 * @throws {UnauthorizedException} throws when authorization was not successful
	 */
	async canActivate(context: ExecutionContext): Promise<boolean> {
		const req = context.switchToHttp().getRequest();
		const token = req.headers.token;
		
		if (!token) throw new UnauthorizedException();
		try {
			const payload = await this.jwtService.verifyAsync(token, {
				secret: this.configService.get<string>("ACCESS_TOKEN_SECRET")
			});
			
			req["user"] = payload;
		} catch {
			throw new UnauthorizedException();
		}
		return true;
	}

}
