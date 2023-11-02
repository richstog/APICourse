import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EditTimetable } from "../edit_timetable/edit_timetable.model";
import { MaketTimetable } from "../maket_timetable/maket_timetable.model";
import { Col } from "sequelize/types/utils";


interface FullTimetableAttrs {
    full_date
    maket_id
}

@Table({tableName: 'full_timetable', timestamps: false})
export class FullTimetable extends Model<FullTimetable, FullTimetableAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.DATE, allowNull: false})
    full_date: string

    @ForeignKey(() => MaketTimetable)
    @Column({type: DataType.INTEGER, allowNull: false})
    maket_id: number
    @BelongsTo(() => MaketTimetable)
    maket_timetable: MaketTimetable

    @HasMany(() => EditTimetable)
    edit_timetables: EditTimetable[]
}