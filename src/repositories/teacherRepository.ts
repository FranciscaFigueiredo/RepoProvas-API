import { repoProvas } from '../database';

async function findTeachers() {
    const teachers = await repoProvas.teacher.findMany({ });

    return teachers;
}

export {
    findTeachers,
};
