import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import { InputFindEmployeeDTO, OutputFindEmployeeDTO } from './FindEmployee.dto';

@injectable()
class FindEmployeeUseCase {

  constructor(
    @inject('EmployeesRepository')
    employeesRepository: EmployeesRepositoryInterface) { }

  public async execute(input: InputFindEmployeeDTO): Promise<OutputFindEmployeeDTO> {
    return {}
  }
}

export default FindEmployeeUseCase;