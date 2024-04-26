import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './entities/company.entity';
import { DatabaseModule } from 'src/database/database.module';
import { companyProviders } from './providers/company.providers';

@Module({
  imports: [SequelizeModule.forFeature([Company])
  ,DatabaseModule
],
  controllers: [CompanyController],
  providers: [CompanyService,...companyProviders],
})
export class CompanyModule {}
