import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


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

    @Column({type: DataType.NUMBER, allowNull: false})
    full_id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    edit_discipline: number

    @Column({type: DataType.INTEGER, allowNull: false})
    edit_teacher: number

    @Column({type: DataType.INTEGER, allowNull: false})
    edit_auditorium: number
}