import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { Discipline } from "../disciplines/disciplines.model";


interface LoadTeachAttrs {
    teacher_id
    group_id
    discipline_id
    load_lecture
    load_practical
    load_subgroup
}

@Table({tableName: 'maket_timetable'})
export class LoadTeach extends Model<LoadTeach, LoadTeachAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    teacher_id: number

    @BelongsTo(() => Teacher)
    teacher: Teacher

    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number

    @ForeignKey(() => Discipline)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_id: number

    @BelongsTo(() => Discipline)
    disciplines: Discipline

    @Column({type: DataType.INTEGER, allowNull: false})
    load_lecture: number

    @Column({type: DataType.INTEGER, allowNull: false})
    load_practical: number

    @Column({type: DataType.BOOLEAN, allowNull: false})
    load_subgroup: boolean
}