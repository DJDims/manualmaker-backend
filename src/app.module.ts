import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import * as dotenv from 'dotenv';

import { MongooseModule } from '@nestjs/mongoose';
import { ManualModule } from './manual/manual.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


dotenv.config()

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE), UserModule, TagModule, ManualModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
