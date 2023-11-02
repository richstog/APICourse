import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { Discipline } from "../disciplines/disciplines.model";
import { FullTimetable } from "../full_timetable/full_timetable.model";
import { Auditorium } from "../auditoriums/auditoriums.model";
import { Group } from "../groups/groups.model";


interface MaketTimeTableAttrs {
    week
    weekday
    subgroup
    group_id
    discipline_id
    teacher_id
    auditorium_id
}

@Table({tableName: 'maket_timetable', timestamps: false})
export class MaketTimeTable extends Model<MaketTimeTable, MaketTimeTableAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.BOOLEAN, allowNull: false})
    week: boolean

    @Column({type: DataType.STRING, allowNull: false})
    weekday: string

    @Column({type: DataType.STRING, allowNull: false})
    subgroup: string

    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number
    @BelongsTo(() => Group)
    group: Group

    @ForeignKey(() => Discipline)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_id: number
    @BelongsTo(() => Discipline)
    discipline: Discipline

    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    teacher_id: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @ForeignKey(() => Auditorium)
    @Column({type: DataType.INTEGER, allowNull: false})
    auditorium_id: number
    @BelongsTo(() => Auditorium)
    auditorium: Auditorium

    @HasMany(() => FullTimetable)
    full_timetable: FullTimetable[]
}