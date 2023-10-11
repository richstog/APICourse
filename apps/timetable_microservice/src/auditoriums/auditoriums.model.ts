import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface AuditoriumTypeCreationAttrs {

}

@Table({tableName: 'auditoriums'})
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

    @Column({type: DataType.DATE, allowNull: false})
    ownerTeacherId: number

    @Column({type: DataType.INTEGER, allowNull: false})
    count_week: number
}