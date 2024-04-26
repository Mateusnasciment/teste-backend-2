import { Company } from "../entities/company.entity";

export const companyProviders = [
    {
        provide: 'COMPANY_REPOSITORY',
        useValue: Company,
    },
];