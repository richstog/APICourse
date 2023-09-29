import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Role } from "../roles/roles.model";
import { UsersAccesses } from "../users_accesses/uses_accesses.model";

@Table({tableName: 'accesses'})
export class Access extends Model<Access> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => User)
    @Column({type: DataType.STRING, allowNull: false})
    value: string

    @Column({type: DataType.STRING, allowNull: true})
    discription: string

    @BelongsToMany(() => User, () => UsersAccesses)
    users: User[]
}