import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface DisciplineTypeCreationAttrs {
    title: string,
    abbreviation: string //3
}

@Table({tableName: 'discipline_types'})
export class DisciplineType extends Model<DisciplineType, DisciplineTypeCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.STRING, allowNull: false})
    abbreviation: string
}