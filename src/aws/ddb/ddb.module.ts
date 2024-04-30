import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { ManualModule } from '../../manual/manual.module';
import { TagModule } from '../../tag/tag.module';
import { UserModule } from '../../user/user.module';
import { AuthModule } from '../../auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (configService: ConfigService) => ({
				uri: configService.get<string>("DATABASE")
			}),
			inject: [ConfigService]
		}),
		ManualModule,
		TagModule,
		UserModule,
		AuthModule
	]
})
export class DdbModule { }
