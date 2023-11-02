export interface UpdateMaketTimetableDto {
    id: number
    
    week: boolean

    weekday: string

    subgroup: string

    group_id: number

    discipline_id: number

    teacher_id: number

    auditorium_id: number
}