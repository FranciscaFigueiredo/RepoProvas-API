import { repoProvas } from '../database';

async function findTeachers(name: string) {
    const teachers = await repoProvas.teacher.findMany({
        where: {
            name: {
                contains: name,
                mode: 'insensitive',
            },
        },
    });

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
