import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";


interface FullTimetableAttrs {
    full_date
    maket_id
}

@Table({tableName: 'full_timetable'})
export class FullTimetable extends Model<FullTimetable, FullTimetableAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.NUMBER, allowNull: false})
    full_id: number

    @Column({type: DataType.DATE, allowNull: false})
    edit_discipline: string

    @HasMany(() => EditTimetable)
    full_timetables: EditTimetable[]

    
}