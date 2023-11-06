import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UsersRoles } from "../users_roles/users_roles.model";
import { ApiProperty } from "@nestjs/swagger";

interface RoleCreationAttrs {
    value: string,
    description: string
}

@Table({tableName: 'roles'})
export class Role extends Model<Role, RoleCreationAttrs>{
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    value: string

    @ApiProperty()
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    description: string

    @BelongsToMany(() => User, () => UsersRoles)
    users: User[]
}