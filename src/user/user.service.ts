import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Model } from 'mongoose';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(User.name)
		private userModel: Model<User>
	){}

	async create(createUserDto: CreateUserDto) {
		const hashedPassword = await argon2.hash(createUserDto.password);
		createUserDto.password = hashedPassword;

		return await this.userModel.create(createUserDto);
	}

	async findAll() {
		return await this.userModel.find().exec();
	}

	async findById(id: string) {
		return await this.userModel.findOne({_id: id}).exec();
	}

	async findByUsername(username: string) {
		return await this.userModel.findOne({username: username}).exec();
	}

	async findByEmail(email: string) {
		return await this.userModel.findOne({email: email}).exec();
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		return await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
	}

	async remove(id: string) {
		return await this.userModel.findByIdAndDelete(id).exec();
	}

	async follow(id: string, followerId: string) {
		await this.userModel.findByIdAndUpdate(id, {$push:{followers: followerId}}).exec();
		return await this.userModel.findByIdAndUpdate(followerId, {$push:{following: id}}, { new: true }).exec();
	}
	
	async unfollow(id: string, unfollowerId: string) {
		await this.userModel.findByIdAndUpdate(id, {$pull:{followers: unfollowerId}}).exec();
		return await this.userModel.findByIdAndUpdate(unfollowerId, {$pull:{following: id}}, { new: true }).exec();
	}
}
