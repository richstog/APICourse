import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";


interface GroupCreationAttrs {
    number: string, // 6
    mentor: string,
    spec: boolean
}

@Table({tableName: 'groups'})
export class Group extends Model<Group, GroupCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: false})
    number: string

    @Column({type: DataType.INTEGER, allowNull: false})
    mentor: number

    @Column({type: DataType.INTEGER, allowNull: false})
    spec: number
}