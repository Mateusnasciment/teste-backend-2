import { Request, Response } from 'express';
import { container } from 'tsyringe';
import FindEmployeeUseCase from '@application/usecases/employees/find/FindEmployeeUseCase';

class EmployeesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name } = request.query;

    const findEmployeeUseCase = container.resolve(
      FindEmployeeUseCase,
    );

    const employeeReturn = await findEmployeeUseCase.execute({});

    return response.status(200).json(employeeReturn);
  }
}

export default EmployeesController;
