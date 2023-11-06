import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { CTS } from "../cts/cts.model";
import { Group } from "../groups/groups.model";
import { ApiProperty } from "@nestjs/swagger";


interface SpecialityCreationAttrs {
    code: string, // 15
    title: string, // 100
    base: boolean
}

@Table({tableName: 'specialities', timestamps: false})
export class Speciality extends Model<Speciality, SpecialityCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    code: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @ApiProperty()
    @Column({type: DataType.BOOLEAN, allowNull: false})
    base: boolean

    @HasMany(() => CTS)
    ctses: CTS[]

    @HasMany(() => Group)
    groups: Group
}