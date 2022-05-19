import Employee from '@domain/employees/entities/Employee';
import RepositoryInterface from '@domain/@shared/repositories/RepositoryInterface';

export default interface EmployeesRepositoryInterface
  extends RepositoryInterface<Employee> { }