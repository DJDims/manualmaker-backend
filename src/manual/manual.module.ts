import { Module } from '@nestjs/common';
import { ManualService } from './manual.service';
import { ManualController } from './manual.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Manual, ManualSchema } from './manual.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: Manual.name, schema: ManualSchema }])],
	controllers: [ManualController],
	providers: [ManualService],
})
export class ManualModule { }
