import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { DatabaseModule } from '../database/database.module';
import { UsersService } from './user.service';
import { usersProviders } from './users.providers';
import { UserModel } from './user.model';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, UserModel],
})
export class UsersModule {}
