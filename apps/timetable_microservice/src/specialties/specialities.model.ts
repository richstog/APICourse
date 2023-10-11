import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface SpecialityCreationAttrs {
    code: string, // 15
    title: string, // 100
    base: boolean
}

@Table({tableName: 'specialities'})
export class Speciality extends Model<Speciality, SpecialityCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    code: string

    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @Column({type: DataType.BOOLEAN, allowNull: false})
    base: string
}