import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
describe('EmployeeController', () => {
  let controller: EmployeeController;
  let service: EmployeeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeController],
      providers: [EmployeeService,
      {
        provide: 'EMPLOYEE_REPOSITORY',
        useValue: {
          create: jest.fn(),
          findAll: jest.fn(),
          findByPk: jest.fn(),
          update: jest.fn(),
          destroy: jest.fn(),
        },
      }
      ],
    }).compile();

    controller = module.get<EmployeeController>(EmployeeController);
    service = module.get<EmployeeService>(EmployeeService);
  });

  describe('create', () => {
    it('should create a new employee', async () => {
      const createEmployeeDto: CreateEmployeeDto = {
        name: 'John Doe',
        cpf: '12345678900',
        rg: '12345678',
        birthdate: new Date('1990-01-01'),
        email: 'johndoe@example.com',
        phone: '(11) 98765-4321',
        address: '123 Main Street',
        sector: 'Engineering',
        position: 'Software Engineer',
      };
      const expectedResult = { id: '1', ...createEmployeeDto } as Employee;
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);
      const result = await controller.create(createEmployeeDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createEmployeeDto);
    });
  });

  describe('findAll', () => {
    it('should return all employees', async () => {
      const expectedResult = [];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);
      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return an employee by id', async () => {
      const employeeId = '1';
      const expectedResult = { id: 1, name: 'John Doe', cpf: '12345678900', rg: '12345678',
        birthdate: new Date('1990-01-01'), email: '', phone: '', address: '123 Main Street',
        sector: 'Engineering', position: 'Software Engineer' } as unknown as Employee;  
      jest.spyOn(service, 'findOne').mockResolvedValue(Promise.resolve(expectedResult));
      const result = await controller.findOne(employeeId);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(employeeId);
    });
  });

  describe('update', () => {
    it('should update an employee by id', async () => {
      const employeeId = '1';
      const updateEmployeeDto: UpdateEmployeeDto = {
        name: 'Jane Doe',
        email: 'testante@gmail.com',
      };
      const expectedResult: [number] = [1];
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);
      const result = await controller.update(employeeId, updateEmployeeDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+employeeId, updateEmployeeDto);
    });
  });

  describe('remove', () => {
    it('should remove an employee by id', async () => {
      const employeeId = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(1);
      const result = await controller.remove(employeeId);
      expect(result).toBe(1);
      expect(service.remove).toHaveBeenCalledWith(+employeeId);
    });
  }); 

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
