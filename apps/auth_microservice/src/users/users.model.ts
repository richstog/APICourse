import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { UsersRoles } from "../users_roles/users_roles.model";

interface UserCreationAttrs {
    email: string,
    login: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string

    @Column({type: DataType.STRING, unique: false, allowNull: false})
    password: string

    @BelongsToMany(() => Role, () => UsersRoles)
    roles: Role[]
}