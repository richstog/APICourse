import { Injectable } from '@nestjs/common';
import { Student } from './students.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStudentDto, UpdateStudentDto } from '@app/common';

@Injectable()
export class StudentsService {
    constructor(
        @InjectModel(Student) private studentRepository: typeof Student,
        ) {}

        async allStudents() {
            const students = await this.studentRepository.findAll()
            return JSON.stringify(students)
        }

        async oneStudent(id: number) {
            const student = await this.studentRepository.findByPk(id)
            return JSON.stringify(student)
        }

        async createStudent(dto: CreateStudentDto) {
            const student = await this.studentRepository.create({...dto})
            return JSON.stringify(student)
        }

        async updateStudent(dto: UpdateStudentDto) {
            const {id, ...data} = dto
            const student = await this.studentRepository.update(
                {...data},
                {where: {id}}
            )
            return JSON.stringify(student)
        }
}
