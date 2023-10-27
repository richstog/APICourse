import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { DisciplineType } from "../discipline_types/discipline_types.model";
import { Speciality } from "../specialties/specialities.model";


interface CTSCreationAttrs {

}

@Table({tableName: 'cts'})
export class CTS extends Model<CTS, CTSCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ForeignKey(() => Speciality)
    @Column({type: DataType.INTEGER, allowNull: false})
    specId: number
    @BelongsTo(() => Speciality)
    speciality: Speciality

    @Column({type: DataType.CHAR, allowNull: false})
    course: string

    @Column({type: DataType.BOOLEAN, allowNull: false})
    semestr: boolean

    @ForeignKey(() => DisciplineType)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_type_id: number
    @BelongsTo(() => DisciplineType)
    discipline_type: DisciplineType

    @Column({type: DataType.DATE, allowNull: false})
    date_start: Date

    @Column({type: DataType.INTEGER, allowNull: false})
    count_week: number
}