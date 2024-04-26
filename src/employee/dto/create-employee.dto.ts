import { IsNotEmpty, IsOptional, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  @IsNotEmpty()
  cpf!: string;

  @ApiProperty()
  @IsNotEmpty()
  rg!: string;

  @ApiProperty()
  @IsDateString()
  birthdate!: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsOptional()
  @IsPhoneNumber('BR')
  phone?: string;

  @ApiProperty()
  @IsNotEmpty()
  address!: string;

  @ApiProperty()
  @IsNotEmpty()
  sector!: string;

  @ApiProperty()
  @IsNotEmpty()
  position!: string;
}
