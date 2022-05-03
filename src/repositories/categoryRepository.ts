import { repoProvas } from '../database';

async function findCategories() {
    const categories = await repoProvas.categorie.findMany({ });

    return categories;
}

async function findCategoriesByTestTeacher(teacherId: number) {
    const categories = await repoProvas.test.findMany({
        where: {
            teacherDiscipline: {
                teacherId,
            },
        },
        select: {
            category: true,
        },
    });

    return categories;
}

async function findCategoryById(categoryId: number) {
    const categories = await repoProvas.test.findMany({
        where: {
            id: categoryId,
        },
        select: {
            category: true,
        },
    });

    return categories;
}

export {
    findCategories,
    findCategoriesByTestTeacher,
    findCategoryById,
};
