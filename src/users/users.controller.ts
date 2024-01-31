import { Body, Controller,HttpStatus,Post, Res,Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/user.dto';

@Controller('users')
export class UsersController {

constructor(private userService:UsersService){}

 @Post('/create')
 async createUser(@Res() res , @Body() createUserDTO: CreateUserDTO){
    
    const user = await this.userService.createUser(createUserDTO);

    return res.status(HttpStatus.OK).json({
      message: 'User succesfully create',
      user : user

    })

 }

 @Get()
 async getUsers(@Res() res){
  const users = await this.userService.getUsers();
  res.status(HttpStatus.OK).json({
      users: users

  }) 

 }

}
