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
import { ApiResponse } from '@nestjs/swagger';
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
    @ApiResponse({type: Auditorium})
    @Get('/auditorium')
    async allAuditorium() {
    	return this.timetableService.allAuditorium()
    }
    @ApiResponse({type: Auditorium})
    @Get('/auditorium/:id')
    async oneAuditorium(@Param('id') id: number) {
    	return this.timetableService.oneAuditorium(id)
    }
    @ApiResponse({type: Auditorium})
    @Post('/auditorium')
    async createAuditorium(@Body() dto: CreateAuditoriumDto) {
    	return this.timetableService.createAuditorium(dto)
    }
    @ApiResponse({type: Auditorium})
    @Put('/auditorium')
    async updateAuditorium(@Body() dto: UpdateAuditoriumDto) {
    	return this.timetableService.updateAuditorium(dto)
    }
    @ApiResponse({type: Auditorium})
    @Delete('/auditorium/:id')
    async deleteAuditorium(@Param('id') id: number) {
    	return this.timetableService.deleteAuditorium(id)
    }
    
    //CTS gateway controllers
    @ApiResponse({type: CTS})
    @Get('/cts')
    async allCTS() {
    	return this.timetableService.allCTS()
    }
    @ApiResponse({type: CTS})
    @Get('/cts/:id')
    async oneCTS(@Param('id') id: number) {
    	return this.timetableService.oneCTS(id)
    }
    @ApiResponse({type: CTS})
    @Post('/cts')
    async createCTS(@Body() dto: CreateCTSDto) {
    	return this.timetableService.createCTS(dto)
    }
    @ApiResponse({type: CTS})
    @Put('/cts')
    async updateCTS(@Body() dto: UpdateCTSDto) {
    	return this.timetableService.updateCTS(dto)
    }
    @ApiResponse({type: CTS})
    @Delete('/cts/:id')
    async deleteCTS(@Param('id') id: number) {
    	return this.timetableService.deleteCTS(id)
    }
    
    //DisciplineType gateway controllers
    @ApiResponse({type: DisciplineType})
    @Get('/disciplineType')
    async allDisciplineType() {
    	return this.timetableService.allDisciplineType()
    }
    @ApiResponse({type: DisciplineType})
    @Get('/disciplineType/:id')
    async oneDisciplineType(@Param('id') id: number) {
    	return this.timetableService.oneDisciplineType(id)
    }
    @ApiResponse({type: DisciplineType})
    @Post('/disciplineType')
    async createDisciplineType(@Body() dto: CreateDisciplineTypeDto) {
    	return this.timetableService.createDisciplineType(dto)
    }
    @ApiResponse({type: DisciplineType})
    @Put('/disciplineType')
    async updateDisciplineType(@Body() dto: UpdateDisciplineTypeDto) {
    	return this.timetableService.updateDisciplineType(dto)
    }
    @ApiResponse({type: DisciplineType})
    @Delete('/disciplineType/:id')
    async deleteDisciplineType(@Param('id') id: number) {
    	return this.timetableService.deleteDisciplineType(id)
    }
    
    //Discipline gateway controllers
    @ApiResponse({type: Discipline})
    @Get('/discipline')
    async allDiscipline() {
    	return this.timetableService.allDiscipline()
    }
    @ApiResponse({type: Discipline})
    @Get('/discipline/:id')
    async oneDiscipline(@Param('id') id: number) {
    	return this.timetableService.oneDiscipline(id)
    }
    @ApiResponse({type: Discipline})
    @Post('/discipline')
    async createDiscipline(@Body() dto: CreateDisciplineDto) {
    	return this.timetableService.createDiscipline(dto)
    }
    @ApiResponse({type: Discipline})
    @Put('/discipline')
    async updateDiscipline(@Body() dto: UpdateDisciplineDto) {
    	return this.timetableService.updateDiscipline(dto)
    }
    @ApiResponse({type: Discipline})
    @Delete('/discipline/:id')
    async deleteDiscipline(@Param('id') id: number) {
    	return this.timetableService.deleteDiscipline(id)
    }
    
    //EditTimetable gateway controllers
    @ApiResponse({type: EditTimetable})
    @Get('/editTimetable')
    async allEditTimetable() {
    	return this.timetableService.allEditTimetable()
    }
    @ApiResponse({type: EditTimetable})
    @Get('/editTimetable/:id')
    async oneEditTimetable(@Param('id') id: number) {
    	return this.timetableService.oneEditTimetable(id)
    }
    @ApiResponse({type: EditTimetable})
    @Post('/editTimetable')
    async createEditTimetable(@Body() dto: CreateEditTimetableDto) {
    	return this.timetableService.createEditTimetable(dto)
    }
    @ApiResponse({type: EditTimetable})
    @Put('/editTimetable')
    async updateEditTimetable(@Body() dto: UpdateEditTimetableDto) {
    	return this.timetableService.updateEditTimetable(dto)
    }
    @ApiResponse({type: EditTimetable})
    @Delete('/editTimetable/:id')
    async deleteEditTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteEditTimetable(id)
    }
    
    //FullTimetable gateway controllers
    @ApiResponse({type: FullTimetable})
    @Get('/fullTimetable')
    async allFullTimetable() {
    	return this.timetableService.allFullTimetable()
    }
    @ApiResponse({type: FullTimetable})
    @Get('/fullTimetable/:id')
    async oneFullTimetable(@Param('id') id: number) {
    	return this.timetableService.oneFullTimetable(id)
    }
    @ApiResponse({type: FullTimetable})
    @Post('/fullTimetable')
    async createFullTimetable(@Body() dto: CreateFullTimetableDto) {
    	return this.timetableService.createFullTimetable(dto)
    }
    @ApiResponse({type: FullTimetable})
    @Put('/fullTimetable')
    async updateFullTimetable(@Body() dto: UpdateFullTimetableDto) {
    	return this.timetableService.updateFullTimetable(dto)
    }
    @ApiResponse({type: FullTimetable})
    @Delete('/fullTimetable/:id')
    async deleteFullTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteFullTimetable(id)
    }
    
    //Group gateway controllers
    @ApiResponse({type: Group})
    @Get('/group')
    async allGroup() {
    	return this.timetableService.allGroup()
    }
    @ApiResponse({type: Group})
    @Get('/group/:id')
    async oneGroup(@Param('id') id: number) {
    	return this.timetableService.oneGroup(id)
    }
    @ApiResponse({type: Group})
    @Post('/group')
    async createGroup(@Body() dto: CreateGroupDto) {
    	return this.timetableService.createGroup(dto)
    }
    @ApiResponse({type: Group})
    @Put('/group')
    async updateGroup(@Body() dto: UpdateGroupDto) {
    	return this.timetableService.updateGroup(dto)
    }
    @ApiResponse({type: Group})
    @Delete('/group/:id')
    async deleteGroup(@Param('id') id: number) {
    	return this.timetableService.deleteGroup(id)
    }
    
    //LoadTeach gateway controllers
    @ApiResponse({type: LoadTeach})
    @Get('/loadTeach')
    async allLoadTeach() {
    	return this.timetableService.allLoadTeach()
    }
    @ApiResponse({type: LoadTeach})
    @Get('/loadTeach/:id')
    async oneLoadTeach(@Param('id') id: number) {
    	return this.timetableService.oneLoadTeach(id)
    }
    @ApiResponse({type: LoadTeach})
    @Post('/loadTeach')
    async createLoadTeach(@Body() dto: CreateLoadTeachDto) {
    	return this.timetableService.createLoadTeach(dto)
    }
    @ApiResponse({type: LoadTeach})
    @Put('/loadTeach')
    async updateLoadTeach(@Body() dto: UpdateLoadTeachDto) {
    	return this.timetableService.updateLoadTeach(dto)
    }
    @ApiResponse({type: LoadTeach})
    @Delete('/loadTeach/:id')
    async deleteLoadTeach(@Param('id') id: number) {
    	return this.timetableService.deleteLoadTeach(id)
    }
    
    //MaketTimetable gateway controllers
    @ApiResponse({type: MaketTimetable})
    @Get('/maketTimetable')
    async allMaketTimetable() {
    	return this.timetableService.allMaketTimetable()
    }
    @ApiResponse({type: MaketTimetable})
    @Get('/maketTimetable/:id')
    async oneMaketTimetable(@Param('id') id: number) {
    	return this.timetableService.oneMaketTimetable(id)
    }
    @ApiResponse({type: MaketTimetable})
    @Post('/maketTimetable')
    async createMaketTimetable(@Body() dto: CreateMaketTimetableDto) {
    	return this.timetableService.createMaketTimetable(dto)
    }
    @ApiResponse({type: MaketTimetable})
    @Put('/maketTimetable')
    async updateMaketTimetable(@Body() dto: UpdateMaketTimetableDto) {
    	return this.timetableService.updateMaketTimetable(dto)
    }
    @ApiResponse({type: MaketTimetable})
    @Delete('/maketTimetable/:id')
    async deleteMaketTimetable(@Param('id') id: number) {
    	return this.timetableService.deleteMaketTimetable(id)
    }
    
    //Speciality gateway controllers
    @ApiResponse({type: Speciality})
    @Get('/speciality')
    async allSpeciality() {
    	return this.timetableService.allSpeciality()
    }
    @ApiResponse({type: Speciality})
    @Get('/speciality/:id')
    async oneSpeciality(@Param('id') id: number) {
    	return this.timetableService.oneSpeciality(id)
    }
    @ApiResponse({type: Speciality})
    @Post('/speciality')
    async createSpeciality(@Body() dto: CreateSpecialityDto) {
    	return this.timetableService.createSpeciality(dto)
    }
    @ApiResponse({type: Speciality})
    @Put('/speciality')
    async updateSpeciality(@Body() dto: UpdateSpecialityDto) {
    	return this.timetableService.updateSpeciality(dto)
    }
    @ApiResponse({type: Speciality})
    @Delete('/speciality/:id')
    async deleteSpeciality(@Param('id') id: number) {
    	return this.timetableService.deleteSpeciality(id)
    }
    
    //Student gateway controllers
    @ApiResponse({type: Student})
    @Get('/student')
    async allStudent() {
    	return this.timetableService.allStudent()
    }
    @ApiResponse({type: Student})
    @Get('/student/:id')
    async oneStudent(@Param('id') id: number) {
    	return this.timetableService.oneStudent(id)
    }
    @ApiResponse({type: Student})
    @Post('/student')
    async createStudent(@Body() dto: CreateStudentDto) {
    	return this.timetableService.createStudent(dto)
    }
    @ApiResponse({type: Student})
    @Put('/student')
    async updateStudent(@Body() dto: UpdateStudentDto) {
    	return this.timetableService.updateStudent(dto)
    }
    @ApiResponse({type: Student})
    @Delete('/student/:id')
    async deleteStudent(@Param('id') id: number) {
    	return this.timetableService.deleteStudent(id)
    }
    
    //Teacher gateway controllers
    @ApiResponse({type: Teacher})
    @Get('/teacher')
    async allTeacher() {
    	return this.timetableService.allTeacher()
    }
    @ApiResponse({type: Teacher})
    @Get('/teacher/:id')
    async oneTeacher(@Param('id') id: number) {
    	return this.timetableService.oneTeacher(id)
    }
    @ApiResponse({type: Teacher})
    @Post('/teacher')
    async createTeacher(@Body() dto: CreateTeacherDto) {
    	return this.timetableService.createTeacher(dto)
    }
    @ApiResponse({type: Teacher})
    @Put('/teacher')
    async updateTeacher(@Body() dto: UpdateTeacherDto) {
    	return this.timetableService.updateTeacher(dto)
    }
    @ApiResponse({type: Teacher})
    @Delete('/teacher/:id')
    async deleteTeacher(@Param('id') id: number) {
    	return this.timetableService.deleteTeacher(id)
    }
}
