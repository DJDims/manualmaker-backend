import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<User>
	){}

	async create(createUserDto: CreateUserDto) {
		return await this.userModel.create(createUserDto);
	}

	async findAll() {
		return await this.userModel.find().exec();
	}

	async findOne(id: string) {
		return await this.userModel.findById(id).exec();
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
	}

	async remove(id: string) {
		return await this.userModel.findByIdAndDelete(id).exec();
	}

	async follow(id: string) {
		return await this.userModel.findByIdAndDelete(id).exec();
	}
	
	async unfollow(id: string) {
		return await this.userModel.findByIdAndDelete(id).exec();
	}
}
