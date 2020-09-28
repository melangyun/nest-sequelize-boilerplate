import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserModel {
    constructor(
        @Inject('UsersRepository')
        private readonly usersRepository: typeof User,
    ){}

    findAll(){
        return this.usersRepository.findAll();
    }
}
