import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";
import { MaketTimeTable } from "../maket_timetable/maket_timetable.model";


interface AuditoriumTypeCreationAttrs {

}

@Table({tableName: 'auditoriums', timestamps: false})
export class Auditorium extends Model<Auditorium, AuditoriumTypeCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    number: number

    @Column({type: DataType.CHAR, allowNull: false})
    title: string

    @Column({type: DataType.BOOLEAN, allowNull: false})
    count_seat: boolean

    @Column({type: DataType.INTEGER, allowNull: false})
    count_computer: number

    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    ownerTeacherId: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @Column({type: DataType.INTEGER, allowNull: false})
    count_week: number

    @HasMany(() => EditTimetable)
    edit_timetables: EditTimetable[]

    @HasMany(() => MaketTimeTable)
    maket_timetables: MaketTimeTable[]
}