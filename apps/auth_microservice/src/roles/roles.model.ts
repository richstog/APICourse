import { Column, DataType, Model, Table } from "sequelize-typescript";

interface RoleCreationAttrs {
    name
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    description: string
}