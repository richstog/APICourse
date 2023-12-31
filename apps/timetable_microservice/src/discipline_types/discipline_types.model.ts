import { BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Group } from "../groups/groups.model";
import { CTS } from "../cts/cts.model";
import { Discipline } from "../disciplines/disciplines.model";
import { ApiProperty } from "@nestjs/swagger";


interface DisciplineTypeCreationAttrs {
    title: string,
    abbreviation: string //3
}

@Table({tableName: 'discipline_types', timestamps: false})
export class DisciplineType extends Model<DisciplineType, DisciplineTypeCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    title: string

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    abbreviation: string

    @HasMany(() => Discipline)
    disciplines: Discipline[]

    @HasMany(() => CTS)
    ctses: CTS[]
}