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
		try {
			const tag = new this.manualModel(createManualDto);
			return await tag.save();
		} catch (error) {
			if (error.code === 11000) throw new HttpException("Tag name alredy taken", HttpStatus.BAD_REQUEST);
			throw error;
		}
	}

	async findAll() {
		return await this.manualModel.find().exec();
	}

	async findOne(id: string) {
		return await this.manualModel.findById(id).exec();
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
