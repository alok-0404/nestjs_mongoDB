import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schema/user.schema';

@Module({
  imports:[ MongooseModule.forFeature([{name: User.name, schema: userSchema}])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
