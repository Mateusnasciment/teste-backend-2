import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    @ApiProperty({ example: 'uuid', description: 'The ID of the company' })
    @IsOptional()
    @IsUUID()
    id?: string;
}
