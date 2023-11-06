import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { DisciplineType } from "../discipline_types/discipline_types.model";
import { Speciality } from "../specialties/specialities.model";
import { ApiProperty } from "@nestjs/swagger";


interface CTSCreationAttrs {

}

@Table({tableName: 'cts', timestamps: false})
export class CTS extends Model<CTS, CTSCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @ForeignKey(() => Speciality)
    @Column({type: DataType.INTEGER, allowNull: false})
    specId: number
    @BelongsTo(() => Speciality)
    speciality: Speciality

    @ApiProperty()
    @Column({type: DataType.CHAR, allowNull: false})
    course: string

    @ApiProperty()
    @Column({type: DataType.BOOLEAN, allowNull: false})
    semestr: boolean

    @ApiProperty()
    @ForeignKey(() => DisciplineType)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_type_id: number
    @BelongsTo(() => DisciplineType)
    discipline_type: DisciplineType

    @ApiProperty()
    @Column({type: DataType.DATE, allowNull: false})
    date_start: string

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    count_week: number
}