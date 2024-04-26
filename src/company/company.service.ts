import { Inject, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @Inject('COMPANY_REPOSITORY')
    private readonly CompanyRepository: typeof Company,
  ) {}

  create(createCompanyDto: CreateCompanyDto): Promise<Company>{
    return this.CompanyRepository.create();
  }

  findAll() {
    return this.CompanyRepository.findAll();
  }

  findOne(id: string) {
    console.log(id);
    return this.CompanyRepository.findByPk(id);
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.CompanyRepository.update(updateCompanyDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.CompanyRepository.destroy({
      where: {
        id,
      },
    });
  }
}
