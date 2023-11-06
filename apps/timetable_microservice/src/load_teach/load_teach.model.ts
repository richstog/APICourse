import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { Discipline } from "../disciplines/disciplines.model";
import { Group } from "../groups/groups.model";
import { ApiProperty } from "@nestjs/swagger";


interface LoadTeachAttrs {
    teacher_id
    group_id
    discipline_id
    load_lecture
    load_practical
    load_subgroup
}

@Table({tableName: 'load_teach', timestamps: false})
export class LoadTeach extends Model<LoadTeach, LoadTeachAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    teacher_id: number
    @BelongsTo(() => Teacher)
    teacher: Teacher

    @ApiProperty()
    @ForeignKey(() => Group)
    @Column({type: DataType.INTEGER, allowNull: false})
    group_id: number
    @BelongsTo(() => Group)
    group: Group

    @ApiProperty()
    @ForeignKey(() => Discipline)
    @Column({type: DataType.INTEGER, allowNull: false})
    discipline_id: number
    @BelongsTo(() => Discipline)
    disciplines: Discipline

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    load_lecture: number

    @ApiProperty()
    @Column({type: DataType.INTEGER, allowNull: false})
    load_practical: number

    @ApiProperty()
    @Column({type: DataType.BOOLEAN, allowNull: false})
    load_subgroup: boolean
}