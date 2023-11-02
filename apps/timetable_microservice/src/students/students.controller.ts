import { Controller } from '@nestjs/common';
import { StudentsService } from './students.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateStudentDto, UpdateStudentDto } from '@app/common';

@Controller('students')
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

    @MessagePattern('all_student')
    async allStudent() {
        const students = await this.studentsService.allStudents()
        return students
    }

    @MessagePattern('one_student')
    async oneStudent(id: number) {
        const student = await this.studentsService.oneStudent(id)
        return student
    }

    @MessagePattern('create_student')
    async createStudent(dto: CreateStudentDto) {
        const student = await this.studentsService.createStudent(dto)
        return student
    }

    @MessagePattern('update_student')
    async updateStudent(dto: UpdateStudentDto) {
        const student = await this.studentsService.updateStudent(dto)
        return student
    }

}
