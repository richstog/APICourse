import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Group } from "../groups/groups.model";


interface StudentCreationAttrs {
    name: string,
    surname: string,
    middle_name: string
}

@Table({tableName: 'students'})
export class Student extends Model<Student, StudentCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number

    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @Column({type: DataType.STRING, allowNull: false})
    surname: string

    @Column({type: DataType.STRING, allowNull: false})
    middle_name: string

    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number
    @BelongsTo(() => Group)
    group: Group
}