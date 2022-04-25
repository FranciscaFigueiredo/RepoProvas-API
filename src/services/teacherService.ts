import * as teacherRepository from '../repositories/teacherRepository';

async function findTeachersList() {
    const teachers = await teacherRepository.findTeachers();

    return teachers;
}

export {
    findTeachersList,
};
