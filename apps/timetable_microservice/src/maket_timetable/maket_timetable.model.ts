import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface MaketTimeTableAttrs {
    week
    weekday
    subgroup
    group_id
    discipline_id
    teacher_id
    auditorium_id
}

@Table({tableName: 'maket_timetable'})
export class EditTimetable extends Model<EditTimetable, MaketTimeTableAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.BOOLEAN, allowNull: false})
    week: boolean

    @Column({type: DataType.STRING, allowNull: false})
    weekday: string

    @Column({type: DataType.STRING, allowNull: false})
    subgroup: string

    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    teacher_id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    auditorium_id: number
}