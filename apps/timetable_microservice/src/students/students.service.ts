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
            return students
        }

        async oneStudent(id: number) {
            const student = await this.studentRepository.findByPk(id)
            return student
        }

        async createStudent(dto: CreateStudentDto) {
            const student = await this.studentRepository.create({...dto})
            return student
        }

        async updateStudent(dto: UpdateStudentDto) {
            const {id, ...data} = dto
            const student = await this.studentRepository.update(
                {...data},
                {where: {id}}
            )
            return student
        }
}
