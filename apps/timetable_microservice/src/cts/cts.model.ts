import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface CTSCreationAttrs {

}

@Table({tableName: 'cts'})
export class CTS extends Model<CTS, CTSCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.INTEGER, allowNull: false})
    specId: number

    @Column({type: DataType.CHAR, allowNull: false})
    course: string

    @Column({type: DataType.BOOLEAN, allowNull: false})
    semestr: boolean

    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_typeId: number

    @Column({type: DataType.DATE, allowNull: false})
    date_start: Date

    @Column({type: DataType.INTEGER, allowNull: false})
    count_week: number
}