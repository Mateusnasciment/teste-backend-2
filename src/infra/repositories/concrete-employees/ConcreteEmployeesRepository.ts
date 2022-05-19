import Employee from "@domain/employees/entities/Employee";
import EmployeesRepositoryInterface from "@domain/employees/repositories/EmployeesRepositoryInterface";

class ConcreteEmployeesRepository implements EmployeesRepositoryInterface {
  create(entity: Employee): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(entity: Employee): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<Employee> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<Employee[]> {
    throw new Error("Method not implemented.");
  }
}

export default ConcreteEmployeesRepository;