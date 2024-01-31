import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.shcema';

@Module({
  imports:[
    MongooseModule.forFeature([
     {name:'Userdos',schema:UserSchema}

    ])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
