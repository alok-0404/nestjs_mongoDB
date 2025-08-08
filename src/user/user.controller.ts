import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: User) {
    return this.userService.createUser(data);
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }
}
