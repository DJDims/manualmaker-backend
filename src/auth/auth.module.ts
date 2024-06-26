import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
	imports: [
		UserModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get<string>("ACCESS_TOKEN_SECRET"),
				signOptions: { expiresIn: "48h" }
			}),
			inject: [ConfigService],
			global: true
		})
	],
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService]
})
export class AuthModule {}
