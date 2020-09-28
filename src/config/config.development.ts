import { Dialect } from 'sequelize/types';

export const config = {
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
