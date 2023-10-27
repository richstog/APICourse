import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Auditorium } from "../auditoriums/auditoriums.model";
import { Teacher } from "../teachers/teachers.model";
import { Discipline } from "../disciplines/disciplines.model";
import { FullTimetable } from "../full_timetable/full_timetable.model";


interface EditTimetableAttrs {
    full_id
    edit_discipline
    edit_teacher
    edit_auditorium
}

@Table({tableName: 'edit_timetable'})
export class EditTimetable extends Model<EditTimetable, EditTimetableAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => FullTimetable)
    @Column({type: DataType.NUMBER, allowNull: false})
    full_id: number
    @BelongsTo(() => FullTimetable)
    full_timetable: FullTimetable

    @ForeignKey(() => Discipline)
    @Column({type: DataType.INTEGER, allowNull: false})
    edit_discipline: number
    @BelongsTo(() => Discipline)
    discipline: Discipline

    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    edit_teacher: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @ForeignKey(() => Auditorium)
    @Column({type: DataType.INTEGER, allowNull: false})
    edit_auditorium: number
    @BelongsTo(() => Auditorium)
    auditorium: Auditorium
}