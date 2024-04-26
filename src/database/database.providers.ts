import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Company } from 'src/company/entities/company.entity';
import { Employee } from 'src/employee/entities/employee.entity';

export const databaseProviders = [
    {
        provide: Sequelize,
        useFactory: async () => {
            const sequelize = new Sequelize({   
                dialect: 'mysql', //o ideal é que essas informações estejam em um arquivo .env

                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'nest',
            });
            sequelize.addModels([
                Company,
                Employee,
            ]);
            await sequelize.sync();
            return sequelize;
        },
    },
];
