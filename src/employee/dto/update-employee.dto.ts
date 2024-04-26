import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEmail, IsPhoneNumber, IsDateString } from 'class-validator';

export class UpdateEmployeeDto {
  @ApiProperty({ required: false })
  @IsOptional()
  name?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('BR')
  phone?: string;

  @ApiProperty({ required: false, type: Date })
  @IsOptional()
  @IsDateString()
  birthdate?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  address?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  sector?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  position?: string;
}
