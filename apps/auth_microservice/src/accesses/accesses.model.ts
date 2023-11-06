import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Role } from "../roles/roles.model";
import { UsersAccesses } from "../users_accesses/uses_accesses.model";
import { ApiProperty } from "@nestjs/swagger";

@Table({tableName: 'accesses'})
export class Access extends Model<Access> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @ForeignKey(() => User)
    @Column({type: DataType.STRING, allowNull: false})
    value: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: true})
    discription: string

    @BelongsToMany(() => User, () => UsersAccesses)
    users: User[]
}