import { Injectable } from '@nestjs/common';
import { Teacher } from './teachers.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTeacherDto, UpdateTeacherDto } from '@app/common';

@Injectable()
export class TeachersService {
    constructor(
        @InjectModel(Teacher) private teacherRepository: typeof Teacher,
        ) {}

        async allTeachers() {
            const teachers = await this.teacherRepository.findAll()
            return JSON.stringify(teachers)
        }

        async oneTeacher(id: number) {
            const teacher = await this.teacherRepository.findByPk(id)
            return JSON.stringify(teacher)
        }

        async createTeacher(dto: CreateTeacherDto) {
            const teacher = await this.teacherRepository.create({...dto})
            return JSON.stringify(teacher)
        }

        async updateTeacher(dto: UpdateTeacherDto) {
            const {id, ...data} = dto
            const teacher = await this.teacherRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(teacher)
        }
}
