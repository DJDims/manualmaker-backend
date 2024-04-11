import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tag } from './tag.schema';
import { Model } from 'mongoose';

@Injectable()
export class TagService {
	constructor(
		@InjectModel(Tag.name)
		private tagModel: Model<Tag>
	){}

	async create(createTagDto: CreateTagDto) {
		try {
			const tag = new this.tagModel(createTagDto);
			return await tag.save();
		} catch (error) {
			if(error.code === 11000) throw new HttpException("Tag name alredy taken", HttpStatus.BAD_REQUEST);
			throw error;
		}
	}

	async findAll() {
		return await this.tagModel.find().exec();
	}

	async findOne(id: string) {
		return await this.tagModel.findById(id).exec();
	}

	async update(id: string, updateTagDto: UpdateTagDto) {
		return await this.tagModel.findByIdAndUpdate(id, updateTagDto, { new: true }).exec();
	}

	async remove(id: string) {
		return await this.tagModel.findByIdAndDelete(id).exec();
	}
}
