import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";
import { MaketTimetable } from "../maket_timetable/maket_timetable.model";
import { ApiProperty } from "@nestjs/swagger";


interface AuditoriumTypeCreationAttrs {
    number: number
    title: string
    count_computer: number
    ownerTeacherId
    count_week
}

@Table({tableName: 'auditoriums', timestamps: false})
export class Auditorium extends Model<Auditorium, AuditoriumTypeCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    number: number

    @ApiProperty()
    @Column({type: DataType.CHAR, allowNull: false})
    title: string

    @ApiProperty()
    @Column({type: DataType.NUMBER, allowNull: false})
    count_seat: number

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    count_computer: number

    @ApiProperty()
    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    ownerTeacherId: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @HasMany(() => EditTimetable)
    edit_timetables: EditTimetable[]

    @HasMany(() => MaketTimetable)
    maket_timetables: MaketTimetable[]
}


