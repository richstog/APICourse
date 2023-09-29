import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Role } from "../roles/roles.model";
import { Access } from "../accesses/accesses.model";

@Table({tableName: 'users_accesses'})
export class UsersAccesses extends Model<UsersAccesses> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number

    @ForeignKey(() => Access)
    @Column({type: DataType.INTEGER})
    accessId: number
}