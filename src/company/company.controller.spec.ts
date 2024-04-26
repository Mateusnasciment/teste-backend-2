import { Test, TestingModule } from '@nestjs/testing';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

describe('CompanyController', () => {
  let controller: CompanyController;
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyController],
      providers: [CompanyService,
        {
          provide: 'COMPANY_REPOSITORY',
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findByPk: jest.fn(),
            update: jest.fn(),
            destroy: jest.fn(),
          },
        }, 
      ],
    }).compile();

    controller = module.get<CompanyController>(CompanyController);
    service = module.get<CompanyService>(CompanyService);
  });

  describe('create', () => {
    it('should create a new company', async () => {
      const createCompanyDto: CreateCompanyDto = {
        name: 'Test Company',
        cnpj: '123456789',
      };
      const expectedResult = { id: '1', name: createCompanyDto.name, cnpj: createCompanyDto.cnpj } as Company;
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);
      const result = await controller.create(createCompanyDto);
      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createCompanyDto);
    });
  });

  describe('findAll', () => {
    it('should return all companies', async () => {
      const expectedResult = [];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult);
      const result = await controller.findAll();
      expect(result).toEqual(expectedResult);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a company by id', async () => {
      const companyId = '1';
      const expectedResult = { id: 1, name: 'Company 1', cnpj: '123456789' } as unknown as Company;
      jest.spyOn(service, 'findOne').mockResolvedValue(Promise.resolve(expectedResult));
      const result = await controller.findOne(companyId);
      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(companyId);
    });
  });

  describe('update', () => {
    it('should update a company by id', async () => {
      const companyId = '1';
      const updateCompanyDto: UpdateCompanyDto = {
        name: 'Updated Company',
        cnpj: '987654321',
      };

      const expectedResult: [affectedCount: number] = [1];
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult);
      const result = await controller.update(companyId, updateCompanyDto);
      expect(result).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+companyId, updateCompanyDto);
    });
  });

  describe('remove', () => {
  it('should remove a company by id', async () => {
    const companyId = '1';
    jest.spyOn(service, 'remove').mockResolvedValue(1);
    const result = await controller.remove(companyId);
    expect(result).toBe(1);
    expect(service.remove).toHaveBeenCalledWith(+companyId);
  });
});
});
