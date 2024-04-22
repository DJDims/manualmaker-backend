import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';

import { ManualModule } from '../manual/manual.module';
import { TagModule } from '../tag/tag.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../auth/auth.module';

dotenv.config()

@Module({
	imports: [
		MongooseModule.forRoot(process.env.DATABASE),
		ManualModule,
		TagModule,
		UserModule,
		AuthModule
	]
})
export class DdbModule { }
