import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
    constructor(
            @Inject('UsersRepository')
            private readonly usersRepository: typeof User,
    ){}

    findAll(){
        return this.usersRepository.findAll();
    }
}
