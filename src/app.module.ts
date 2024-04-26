import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { EmployeeModule } from './employee/employee.module';
import { databaseProviders } from './database/database.providers';
import { Company } from './company/entities/company.entity';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [
    ConfigModule.forRoot({
}),
    CompanyModule,
    EmployeeModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}