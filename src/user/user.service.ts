import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

 async createUser(data: User): Promise<User> {
  const user = new this.userModel(data);
  return user.save();
}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

}