import 'reflect-metadata';
import { container } from 'tsyringe';

import EmployeesRepositoryInterface from '@domain/employees/repositories/EmployeesRepositoryInterface';
import ConcreteEmployeesRepository from '@infra/repositories/concrete-employees/ConcreteEmployeesRepository';

container.registerSingleton<EmployeesRepositoryInterface>(
  'EmployeesRepository',
  ConcreteEmployeesRepository,
);

