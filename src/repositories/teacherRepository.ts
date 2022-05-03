import { repoProvas } from '../database';

async function findTeachers() {
    const teachers = await repoProvas.teacher.findMany({ });

    return teachers;
}

async function findTeacherDisciplineById(teacherDisciplineId: number) {
    const teacherDiscipline = await repoProvas.teacherDiscipline.findUnique({
        where: {
            id: teacherDisciplineId,
        },
    });

    return teacherDiscipline;
}

async function findTeacherByDisciplineId(disciplineId: number) {
    const teachers = await repoProvas.teacherDiscipline.findMany({
        where: {
            disciplineId,
        },
        include: {
            teacher: true,
        },
    });

    return teachers;
}

export {
    findTeachers,
    findTeacherDisciplineById,
    findTeacherByDisciplineId,
};
