import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';

@Injectable()
export class ConfigService {
  private readonly configProd = {
    database: {
      dialect: 'mysql' as Dialect,
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      logging: false,
    },
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
  };

  private readonly configDev = {
    database: {
      dialect: 'mysql' as Dialect,
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1112',
      database: 'sample',
      synchronize: true,
      logging: msg => {
        console.log(msg);
      },
    },
    jwtPrivateKey: 'jwtPrivateKey',
  };

  private readonly config =
    process.env.NODE_ENV === 'production' ? this.configProd : this.configDev;

  get sequelizeOrmConfig() {
    return this.config.database;
  }

  get jwtConfig() {
    return { privateKey: this.config.jwtPrivateKey };
  }
}
