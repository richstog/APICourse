import {
    CreateAuditoriumDto,
    UpdateAuditoriumDto,
    CreateCTSDto,
    UpdateCTSDto,
    CreateDisciplineTypeDto,
    UpdateDisciplineTypeDto,
    CreateDisciplineDto,
    UpdateDisciplineDto,
    CreateEditTimetableDto,
    UpdateEditTimetableDto,
    CreateFullTimetableDto,
    UpdateFullTimetableDto,
    CreateGroupDto,
    UpdateGroupDto,
    CreateLoadTeachDto,
    UpdateLoadTeachDto,
    CreateMaketTimetableDto,
    UpdateMaketTimetableDto,
    CreateSpecialityDto,
    UpdateSpecialityDto,
    CreateStudentDto,
    UpdateStudentDto,
    CreateTeacherDto,
    UpdateTeacherDto,
} from '@app/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Auditorium } from 'apps/timetable_microservice/src/auditoriums/auditoriums.model';
import { Teacher } from 'apps/timetable_microservice/src/teachers/teachers.model';
import { Student } from 'apps/timetable_microservice/src/students/students.model';
import { Speciality } from 'apps/timetable_microservice/src/specialties/specialities.model';
import { MaketTimetable } from 'apps/timetable_microservice/src/maket_timetable/maket_timetable.model';
import { LoadTeach } from 'apps/timetable_microservice/src/load_teach/load_teach.model';
import { Group } from 'apps/timetable_microservice/src/groups/groups.model';
import { FullTimetable } from 'apps/timetable_microservice/src/full_timetable/full_timetable.model';
import { EditTimetable } from 'apps/timetable_microservice/src/edit_timetable/edit_timetable.model';
import { Discipline } from 'apps/timetable_microservice/src/disciplines/disciplines.model';
import { DisciplineType } from 'apps/timetable_microservice/src/discipline_types/discipline_types.model';
import { CTS } from 'apps/timetable_microservice/src/cts/cts.model';

@Controller('timetable')
export class TimetableController {
    constructor(private readonly timetableService: TimetableService) {}

    //Auditorium gateway controllers
    @ApiTags('Auditorium')
    @ApiOperation({summary: 'Получить всех auditorium'})
    @ApiResponse({status: 200, type: [Auditorium]})
    @Get('/auditorium')
    async allAuditorium() {
    	return this.timetableService.allAuditorium()
    }
    @ApiTags('Auditorium')
    @ApiOperation({summary: 'Получить auditorium'})
    @ApiResponse({status: 200, type: Auditorium})
    @Get('/auditorium/:id')
    async oneAuditorium(@Param('id') id: number) {
    	return this.timetableService.oneAuditorium(id)
    }
    @ApiTags('Auditorium')
    @ApiOperation({summary: 'Создать auditorium'})
    @ApiResponse({status: 200, type: Auditorium})
    @Post('/auditorium')
    async createAuditorium(@Body() dto: CreateAuditoriumDto) {
    	return this.timetableService.createAuditorium(dto)
    }
    @ApiTags('Auditorium')
    @ApiOperation({summary: 'Изменить auditorium'})
    @ApiResponse({status: 200, type: Auditorium})
    @Put('/auditorium')
    async updateAuditorium(@Body() dto: UpdateAuditoriumDto) {
    	return this.timetableService.updateAuditorium(dto)
    }
    @ApiTags('Auditorium')
    @ApiOperation({summary: 'Удалить auditorium'})
    @ApiResponse({status: 200, type: Auditorium})
    @Delete('/auditorium/:id')
    async deleteAuditorium(@Param('id') id: number) {
    	return this.timetableService.deleteAuditorium(id)
    }

    //CTS gateway controllers
    @ApiTags('CTS')
    @ApiOperation({summary: 'Получить всех cts'})
    @ApiResponse({status: 200, type: [CTS]})
    @Get('/cts')
    async allCTS() {
    	return this.timetableService.allCTS()
    }
    @ApiTags('CTS')
    @ApiOperation({summary: 'Получить cts'})
    @ApiResponse({status: 200, type: CTS})
    @Get('/cts/:id')
    async oneCTS(@Param('id') id: number) {
    	return this.timetableService.oneCTS(id)
    }
    @ApiTags('CTS')
    @ApiOperation({summary: 'Создать cts'})
    @ApiResponse({status: 200, type: CTS})
    @Post('/cts')
    async createCTS(@Body() dto: CreateCTSDto) {
    	return this.timetableService.createCTS(dto)
    }
    @ApiTags('CTS')
    @ApiOperation({summary: 'Изменить cts'})
    @ApiResponse({status: 200, type: CTS})
    @Put('/cts')
    async updateCTS(@Body() dto: UpdateCTSDto) {
    	return this.timetableService.updateCTS(dto)
    }
    @ApiTags('CTS')
    @ApiOperation({summary: 'Удалить cts'})
    @ApiResponse({status: 200, type: CTS})
    @Delete('/cts/:id')
    async deleteCTS(@Param('id') id: number) {
    	return this.timetableService.deleteCTS(id)
    }

    //DisciplineType gateway controllers
    @ApiTags('DisciplineType')
    @ApiOperation({summary: 'Получить всех disciplineType'})
    @ApiResponse({status: 200, type: [DisciplineType]})
    @Get('/disciplineType')
    async allDisciplineType() {
    	return this.timetableService.allDisciplineType()
    }
    @ApiTags('DisciplineType')
    @ApiOperation({summary: 'Получить disciplineType'})
    @ApiResponse({status: 200, type: DisciplineType})
    @Get('/disciplineType/:id')
    async oneDisciplineType(@Param('id') id: number) {
    	return this.timetableService.oneDisciplineType(id)
    }
    @ApiTags('DisciplineType')
    @ApiOperation({summary: 'Создать disciplineType'})
    @ApiResponse({status: 200, type: DisciplineType})
    @Post('/disciplineType')
    async createDisciplineType(@Body() dto: CreateDisciplineTypeDto) {
    	return this.timetableService.createDisciplineType(dto)
    }
    @ApiTags('DisciplineType')
    @ApiOperation({summary: 'Изменить disciplineType'})
    @ApiResponse({status: 200, type: DisciplineType})
    @Put('/disciplineType')
    async updateDisciplineType(@Body() dto: UpdateDisciplineTypeDto) {
    	return this.timetableService.updateDisciplineType(dto)
    }
    @ApiTags('DisciplineType')
    @ApiOperation({summary: 'Удалить disciplineType'})
    @ApiResponse({status: 200, type: DisciplineType})
    @Delete('/disciplineType/:id')
    async deleteDisciplineType(@Param('id') id: number) {
    	return this.timetableService.deleteDisciplineType(id)
    }

    //Discipline gateway controllers
    @ApiTags('Discipline')
    @ApiOperation({summary: 'Получить всех discipline'})
    @ApiResponse({status: 200, type: [Discipline]})
    @Get('/discipline')
    async allDiscipline() {
    	return this.timetableService.allDiscipline()
    }
    @ApiTags('Discipline')
    @ApiOperation({summary: 'Получить discipline'})
    @ApiResponse({status: 200, type: Discipline})
    @Get('/discipline/:id')
    async oneDiscipline(@Param('id') id: number) {
    	return this.timetableService.oneDiscipline(id)
    }
    @ApiTags('Discipline')
    @ApiOperation({summary: 'Создать discipline'})
    @ApiResponse({status: 200, type: Discipline})
    @Post('/discipline')
    async createDiscipline(@Body() dto: CreateDisciplineDto) {
    	return this.timetableService.createDiscipline(dto)
    }
    @ApiTags('Discipline')
    @ApiOperation({summary: 'Изменить discipline'})
    @ApiResponse({status: 200, type: Discipline})
    @Put('/discipline')
    async updateDiscipline(@Body() dto: UpdateDisciplineDto) {
    	return this.timetableService.updateDiscipline(dto)
    }
    @ApiTags('Discipline')
    @ApiOperation({summary: 'Удалить discipline'})
    @ApiResponse({status: 200, type: Discipline})
    @Delete('/discipline/:id')
    async deleteDiscipline(@Param('id') id: number) {
    	return this.timetableService.deleteDiscipline(id)
    }

    //EditTimetable gateway controllers
    @ApiTags('EditTimetable')
    @ApiOperation({summary: 'Получить всех editTimetable'})
    @ApiResponse({status: 200, type: [EditTimetable]})
    @Get('/editTimetable')
    async allEditTimetable() {
    	return this.timetableService.allEditTimetable()
    }
    @ApiTags('EditTimetable')
    @ApiOperation({summary: 'Получить editTimetable'})
    @ApiResponse({status: 200, type: EditTimetable})
    @Get('/editTimetable/:id')
    async oneEditTimetable(@Param('id') id: number) {
    	return this.timetableService.oneEditTimetable(id)
    }
    @ApiTags('EditTimetable')
    @ApiOperation({summary: 'Создать editTimetable'})
    @ApiResponse({status: 200, type: EditTimetable})
    @Post('/editTimetable')
    async createEditTimetable(@Body() dto: CreateEditTimetableDto) {
    	return this.timetableService.createEditTimetable(dto)
    }
    @ApiTags('EditTimetable')
    @ApiOperation({summary: 'Изменить editTimetable'})
    @ApiResponse({status: 200, type: EditTimetable})
    @Put('/editTimetable')
    async updateEditTimetable(@Body() dto: UpdateEditTimetableDto) {
    	return this.timetableService.updateEditTimetable(dto)
    }
    @ApiTags('EditTimetable')
    @ApiOperation({summary: 'Удалить editTimetable'})
    @ApiResponse({status: 200, type: EditTimetable})
    @Delete('/editTimetable/:id')
    async deleteEditTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteEditTimetable(id)
    }

    //FullTimetable gateway controllers
    @ApiTags('FullTimetable')
    @ApiOperation({summary: 'Получить всех fullTimetable'})
    @ApiResponse({status: 200, type: [FullTimetable]})
    @Get('/fullTimetable')
    async allFullTimetable() {
    	return this.timetableService.allFullTimetable()
    }
    @ApiTags('FullTimetable')
    @ApiOperation({summary: 'Получить fullTimetable'})
    @ApiResponse({status: 200, type: FullTimetable})
    @Get('/fullTimetable/:id')
    async oneFullTimetable(@Param('id') id: number) {
    	return this.timetableService.oneFullTimetable(id)
    }
    @ApiTags('FullTimetable')
    @ApiOperation({summary: 'Создать fullTimetable'})
    @ApiResponse({status: 200, type: FullTimetable})
    @Post('/fullTimetable')
    async createFullTimetable(@Body() dto: CreateFullTimetableDto) {
    	return this.timetableService.createFullTimetable(dto)
    }
    @ApiTags('FullTimetable')
    @ApiOperation({summary: 'Изменить fullTimetable'})
    @ApiResponse({status: 200, type: FullTimetable})
    @Put('/fullTimetable')
    async updateFullTimetable(@Body() dto: UpdateFullTimetableDto) {
    	return this.timetableService.updateFullTimetable(dto)
    }
    @ApiTags('FullTimetable')
    @ApiOperation({summary: 'Удалить fullTimetable'})
    @ApiResponse({status: 200, type: FullTimetable})
    @Delete('/fullTimetable/:id')
    async deleteFullTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteFullTimetable(id)
    }

    //Group gateway controllers
    @ApiTags('Group')
    @ApiOperation({summary: 'Получить всех group'})
    @ApiResponse({status: 200, type: [Group]})
    @Get('/group')
    async allGroup() {
    	return this.timetableService.allGroup()
    }
    @ApiTags('Group')
    @ApiOperation({summary: 'Получить group'})
    @ApiResponse({status: 200, type: Group})
    @Get('/group/:id')
    async oneGroup(@Param('id') id: number) {
    	return this.timetableService.oneGroup(id)
    }
    @ApiTags('Group')
    @ApiOperation({summary: 'Создать group'})
    @ApiResponse({status: 200, type: Group})
    @Post('/group')
    async createGroup(@Body() dto: CreateGroupDto) {
    	return this.timetableService.createGroup(dto)
    }
    @ApiTags('Group')
    @ApiOperation({summary: 'Изменить group'})
    @ApiResponse({status: 200, type: Group})
    @Put('/group')
    async updateGroup(@Body() dto: UpdateGroupDto) {
    	return this.timetableService.updateGroup(dto)
    }
    @ApiTags('Group')
    @ApiOperation({summary: 'Удалить group'})
    @ApiResponse({status: 200, type: Group})
    @Delete('/group/:id')
    async deleteGroup(@Param('id') id: number) {
    	return this.timetableService.deleteGroup(id)
    }

    //LoadTeach gateway controllers
    @ApiTags('LoadTeach')
    @ApiOperation({summary: 'Получить всех loadTeach'})
    @ApiResponse({status: 200, type: [LoadTeach]})
    @Get('/loadTeach')
    async allLoadTeach() {
    	return this.timetableService.allLoadTeach()
    }
    @ApiTags('LoadTeach')
    @ApiOperation({summary: 'Получить loadTeach'})
    @ApiResponse({status: 200, type: LoadTeach})
    @Get('/loadTeach/:id')
    async oneLoadTeach(@Param('id') id: number) {
    	return this.timetableService.oneLoadTeach(id)
    }
    @ApiTags('LoadTeach')
    @ApiOperation({summary: 'Создать loadTeach'})
    @ApiResponse({status: 200, type: LoadTeach})
    @Post('/loadTeach')
    async createLoadTeach(@Body() dto: CreateLoadTeachDto) {
    	return this.timetableService.createLoadTeach(dto)
    }
    @ApiTags('LoadTeach')
    @ApiOperation({summary: 'Изменить loadTeach'})
    @ApiResponse({status: 200, type: LoadTeach})
    @Put('/loadTeach')
    async updateLoadTeach(@Body() dto: UpdateLoadTeachDto) {
    	return this.timetableService.updateLoadTeach(dto)
    }
    @ApiTags('LoadTeach')
    @ApiOperation({summary: 'Удалить loadTeach'})
    @ApiResponse({status: 200, type: LoadTeach})
    @Delete('/loadTeach/:id')
    async deleteLoadTeach(@Param('id') id: number) {
    	return this.timetableService.deleteLoadTeach(id)
    }

    //MaketTimetable gateway controllers
    @ApiTags('MaketTimetable')
    @ApiOperation({summary: 'Получить всех maketTimetable'})
    @ApiResponse({status: 200, type: [MaketTimetable]})
    @Get('/maketTimetable')
    async allMaketTimetable() {
    	return this.timetableService.allMaketTimetable()
    }
    @ApiTags('MaketTimetable')
    @ApiOperation({summary: 'Получить maketTimetable'})
    @ApiResponse({status: 200, type: MaketTimetable})
    @Get('/maketTimetable/:id')
    async oneMaketTimetable(@Param('id') id: number) {
    	return this.timetableService.oneMaketTimetable(id)
    }
    @ApiTags('MaketTimetable')
    @ApiOperation({summary: 'Создать maketTimetable'})
    @ApiResponse({status: 200, type: MaketTimetable})
    @Post('/maketTimetable')
    async createMaketTimetable(@Body() dto: CreateMaketTimetableDto) {
    	return this.timetableService.createMaketTimetable(dto)
    }
    @ApiTags('MaketTimetable')
    @ApiOperation({summary: 'Изменить maketTimetable'})
    @ApiResponse({status: 200, type: MaketTimetable})
    @Put('/maketTimetable')
    async updateMaketTimetable(@Body() dto: UpdateMaketTimetableDto) {
    	return this.timetableService.updateMaketTimetable(dto)
    }
    @ApiTags('MaketTimetable')
    @ApiOperation({summary: 'Удалить maketTimetable'})
    @ApiResponse({status: 200, type: MaketTimetable})
    @Delete('/maketTimetable/:id')
    async deleteMaketTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteMaketTimetable(id)
    }

    //Speciality gateway controllers
    @ApiTags('Speciality')
    @ApiOperation({summary: 'Получить всех speciality'})
    @ApiResponse({status: 200, type: [Speciality]})
    @Get('/speciality')
    async allSpeciality() {
    	return this.timetableService.allSpeciality()
    }
    @ApiTags('Speciality')
    @ApiOperation({summary: 'Получить speciality'})
    @ApiResponse({status: 200, type: Speciality})
    @Get('/speciality/:id')
    async oneSpeciality(@Param('id') id: number) {
    	return this.timetableService.oneSpeciality(id)
    }
    @ApiTags('Speciality')
    @ApiOperation({summary: 'Создать speciality'})
    @ApiResponse({status: 200, type: Speciality})
    @Post('/speciality')
    async createSpeciality(@Body() dto: CreateSpecialityDto) {
    	return this.timetableService.createSpeciality(dto)
    }
    @ApiTags('Speciality')
    @ApiOperation({summary: 'Изменить speciality'})
    @ApiResponse({status: 200, type: Speciality})
    @Put('/speciality')
    async updateSpeciality(@Body() dto: UpdateSpecialityDto) {
    	return this.timetableService.updateSpeciality(dto)
    }
    @ApiTags('Speciality')
    @ApiOperation({summary: 'Удалить speciality'})
    @ApiResponse({status: 200, type: Speciality})
    @Delete('/speciality/:id')
    async deleteSpeciality(@Param('id') id: number) {
    	return this.timetableService.deleteSpeciality(id)
    }

    //Student gateway controllers
    @ApiTags('Student')
    @ApiOperation({summary: 'Получить всех student'})
    @ApiResponse({status: 200, type: [Student]})
    @Get('/student')
    async allStudent() {
    	return this.timetableService.allStudent()
    }
    @ApiTags('Student')
    @ApiOperation({summary: 'Получить student'})
    @ApiResponse({status: 200, type: Student})
    @Get('/student/:id')
    async oneStudent(@Param('id') id: number) {
    	return this.timetableService.oneStudent(id)
    }
    @ApiTags('Student')
    @ApiOperation({summary: 'Создать student'})
    @ApiResponse({status: 200, type: Student})
    @Post('/student')
    async createStudent(@Body() dto: CreateStudentDto) {
    	return this.timetableService.createStudent(dto)
    }
    @ApiTags('Student')
    @ApiOperation({summary: 'Изменить student'})
    @ApiResponse({status: 200, type: Student})
    @Put('/student')
    async updateStudent(@Body() dto: UpdateStudentDto) {
    	return this.timetableService.updateStudent(dto)
    }
    @ApiTags('Student')
    @ApiOperation({summary: 'Удалить student'})
    @ApiResponse({status: 200, type: Student})
    @Delete('/student/:id')
    async deleteStudent(@Param('id') id: number) {
    	return this.timetableService.deleteStudent(id)
    }

    //Teacher gateway controllers
    @ApiTags('Teacher')
    @ApiOperation({summary: 'Получить всех teacher'})
    @ApiResponse({status: 200, type: [Teacher]})
    @Get('/teacher')
    async allTeacher() {
    	return this.timetableService.allTeacher()
    }
    @ApiTags('Teacher')
    @ApiOperation({summary: 'Получить teacher'})
    @ApiResponse({status: 200, type: Teacher})
    @Get('/teacher/:id')
    async oneTeacher(@Param('id') id: number) {
    	return this.timetableService.oneTeacher(id)
    }
    @ApiTags('Teacher')
    @ApiOperation({summary: 'Создать teacher'})
    @ApiResponse({status: 200, type: Teacher})
    @Post('/teacher')
    async createTeacher(@Body() dto: CreateTeacherDto) {
    	return this.timetableService.createTeacher(dto)
    }
    @ApiTags('Teacher')
    @ApiOperation({summary: 'Изменить teacher'})
    @ApiResponse({status: 200, type: Teacher})
    @Put('/teacher')
    async updateTeacher(@Body() dto: UpdateTeacherDto) {
    	return this.timetableService.updateTeacher(dto)
    }
    @ApiTags('Teacher')
    @ApiOperation({summary: 'Удалить teacher'})
    @ApiResponse({status: 200, type: Teacher})
    @Delete('/teacher/:id')
    async deleteTeacher(@Param('id') id: number) {
    	return this.timetableService.deleteTeacher(id)
    }


}