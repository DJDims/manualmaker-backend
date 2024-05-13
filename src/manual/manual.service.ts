import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateManualDto } from './dto/create-manual.dto';
import { UpdateManualDto } from './dto/update-manual.dto';
import { UpdateManualTagsDto } from './dto/update-manual-tags.dto';
import { Manual } from './manual.schema';
import { Model } from 'mongoose';

@Injectable()
export class ManualService {
	constructor(
		@InjectModel(Manual.name)
		private manualModel: Model<Manual>
	) { }

	async create(createManualDto: CreateManualDto) {
		return await this.manualModel.create(createManualDto);
	}

	async findAll() {
		return await this.manualModel.find().exec();
	}

	async findOne(id: string) {
		return await this.manualModel.findById(id).exec();
	}

	async findByUserId(id: string) {
		return await this.manualModel.find({author: id}).exec();
	}

	async update(id: string, updateManualDto: UpdateManualDto) {
		return await this.manualModel.findByIdAndUpdate(id, updateManualDto, { new: true }).exec();
	}

	async remove(id: string) {
		return await this.manualModel.findByIdAndDelete(id).exec();
	}

	async updateTagList(id: string, updateManualTagsDto: UpdateManualTagsDto) {
		return await this.manualModel.findByIdAndUpdate(id, updateManualTagsDto, { new: true }).exec();
	}
}
