import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: 'companies' })
export class Company extends Model {
    @Column({ allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 })
    id!: string;

    @Column({ allowNull: false })
    name!: string;

    @Column({ allowNull: false, unique: true })
    cnpj!: string;
}
