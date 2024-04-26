import { Inject, Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { parse } from 'papaparse';
import { Optional } from 'sequelize';

@Injectable()
export class EmployeeService {
  static create: any;
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private readonly EmployeeRepository: typeof Employee,
  ) {}
  create(createEmployeeDto: CreateEmployeeDto) {
    return this.EmployeeRepository.create();
  }

  async createCsv(csvData: string) {
    try {
      const parsedData = parse(csvData, { header: true, skipEmptyLines: true });
      const employeeDtos: Optional<any, string>[] = parsedData.data.map(row => ({
        name: row.name,
        email: row.email,
        cpf: row.cpf,
        rg: row.rg,
        birthdate: new Date(row.birthdate),
        phone: row.phone,
        address: row.address,
        sector: row.sector,
        position: row.position,
      }));

      const employees = await this.EmployeeRepository.bulkCreate(employeeDtos);
      return employees;
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return this.EmployeeRepository.findAll();
  }

  findOne(id: string) {
    return this.EmployeeRepository.findByPk(id);
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.EmployeeRepository.update(updateEmployeeDto, {
      where: {
        id,
      },
    });
  }

  remove(id: number) {
    return this.EmployeeRepository.destroy({
      where: {
        id,
      },
    });
  }


  
}
