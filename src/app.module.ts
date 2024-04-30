import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as dotenv from 'dotenv';

import { ManualModule } from './manual/manual.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { SesModule } from './aws/ses/ses.module';
import { S3Module } from './aws/s3/s3.module';
import { DdbModule } from './aws/ddb/ddb.module';


@Module({
	imports: [
		SesModule,
		S3Module,
		DdbModule,
		ConfigModule.forRoot({isGlobal: true})
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
