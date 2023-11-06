import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "../groups/groups.model";
import { ApiProperty } from "@nestjs/swagger";


interface StudentCreationAttrs {
    name: string,
    surname: string,
    middle_name: string
}

@Table({tableName: 'students', timestamps: false})
export class Student extends Model<Student, StudentCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    surname: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    middle_name: string

    @ApiProperty()
    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number
    @BelongsTo(() => Group)
    group: Group
}