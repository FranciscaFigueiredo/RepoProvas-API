import NotFoundError from '../errors/NotFoundError';
import * as teacherRepository from '../repositories/teacherRepository';

async function findTeachersList(name: string) {
    const teachers = await teacherRepository.findTeachers(name);

    return teachers;
}

async function findTeacherDisciplineById(teacherDisciplineId: number) {
    const teacherDiscipline = await teacherRepository
        .findTeacherDisciplineById(teacherDisciplineId);

    if (!teacherDiscipline) {
        throw new NotFoundError('');
    }

    return teacherDiscipline;
}

async function findTeacherByDisciplineId(disciplineId: number) {
    const teachers = await teacherRepository
        .findTeacherByDisciplineId(disciplineId);

    return teachers;
}

export {
    findTeachersList,
    findTeacherDisciplineById,
    findTeacherByDisciplineId,
};
