import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Teacher } from "../teachers/teachers.model";
import { MaketTimetable } from "../maket_timetable/maket_timetable.model";
import { LoadTeach } from "../load_teach/load_teach.model";
import { Speciality } from "../specialties/specialities.model";
import { ApiProperty } from "@nestjs/swagger";


interface GroupCreationAttrs {
    number: string, // 6
    mentor: string,
    spec: boolean
}

@Table({tableName: 'groups', timestamps: false})
export class Group extends Model<Group, GroupCreationAttrs> {
    @ApiProperty()
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @ApiProperty()
    @Column({type: DataType.STRING, allowNull: false})
    number: string

    @ApiProperty()
    @ForeignKey(() => Teacher)
    @Column({type: DataType.INTEGER, allowNull: false})
    mentor_teacher_id: number
    @BelongsTo(() => Teacher)
    mentor_teacher: Teacher

    @ApiProperty()
    @ForeignKey(() => Speciality)
    @Column({type: DataType.INTEGER, allowNull: false})
    spec_id: number
    @BelongsTo(() => Speciality)
    spec: Speciality

    @HasMany(() => MaketTimetable)
    maket_timetables: MaketTimetable[]

    @HasMany(() => LoadTeach)
    loadteaches: LoadTeach[]
}