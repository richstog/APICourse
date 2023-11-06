import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { Discipline } from "../disciplines/disciplines.model";
import { FullTimetable } from "../full_timetable/full_timetable.model";
import { Auditorium } from "../auditoriums/auditoriums.model";
import { Group } from "../groups/groups.model";
import { ApiProperty } from "@nestjs/swagger";


interface MaketTimetableAttrs {
    week
    weekday
    subgroup
    group_id
    discipline_id
    teacher_id
    auditorium_id
}

@Table({tableName: 'maket_timetable', timestamps: false})
export class MaketTimetable extends Model<MaketTimetable, MaketTimetableAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.BOOLEAN, allowNull: false})
    week: boolean

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    weekday: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    subgroup: string

    @ApiProperty()
    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number
    @BelongsTo(() => Group)
    group: Group

    @ApiProperty()
    @ForeignKey(() => Discipline)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_id: number
    @BelongsTo(() => Discipline)
    discipline: Discipline

    @ApiProperty()
    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    teacher_id: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @ApiProperty()
    @ForeignKey(() => Auditorium)
    @Column({type: DataType.INTEGER, allowNull: false})
    auditorium_id: number
    @BelongsTo(() => Auditorium)
    auditorium: Auditorium

    @HasMany(() => FullTimetable)
    full_timetable: FullTimetable[]
}