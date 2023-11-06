import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "../roles/roles.model";
import { UsersRoles } from "../users_roles/users_roles.model";
import { Access } from "../accesses/accesses.model";
import { UsersAccesses } from "../users_accesses/uses_accesses.model";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
    email: string,
    login: string,
    password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>{
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    login: string

    @ApiProperty()
    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string

    @ApiProperty()
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    password: string

    @BelongsToMany(() => Role, () => UsersRoles)
    roles: Role[]

    @BelongsToMany(() => Access, () => UsersAccesses)
    accesses: Access[]
}