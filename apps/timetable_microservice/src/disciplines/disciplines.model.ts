import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface DisciplineCreationAttrs {
    code: string, // 10
    title: string,
}

@Table({tableName: 'disciplines'})
export class Discipline extends Model<Discipline, DisciplineCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    code: string

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.INTEGER, allowNull: false})
    typeId: number
}