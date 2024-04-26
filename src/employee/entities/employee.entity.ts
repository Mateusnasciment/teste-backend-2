import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'employees' })
export class Employee extends Model {
  @Column({ allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 })
  id!: string;

  @Column({ allowNull: false })
  name!: string;

  @Column({ allowNull: false, unique: true })
  cpf!: string;

  @Column({ allowNull: false })
  rg!: string;

  @Column({ allowNull: false })
  birthdate!: Date;

  @Column
  email?: string;

  @Column
  phone?: string;

  @Column({ allowNull: false })
  address!: string;

  @Column({ allowNull: false })
  sector!: string;

  @Column({ allowNull: false })
  position!: string;
}
