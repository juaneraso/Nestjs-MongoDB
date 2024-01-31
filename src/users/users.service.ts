import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UsersService {

constructor(@InjectModel('Userdos') private readonly userModel: Model<User>){}
 
 async createUser(createUserDTO: CreateUserDTO) : Promise<User>{
    const user = new this.userModel(createUserDTO);
    await user.save()
    return user;
 }

 async getUsers(): Promise<User[]>{
    const users = await this.userModel.find();

    return users;

 }




}
