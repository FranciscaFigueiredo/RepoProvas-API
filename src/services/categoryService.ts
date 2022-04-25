import * as categoryRepository from '../repositories/categoryRepository';

async function findCategoriesList() {
    const categories = await categoryRepository.findCategories();

    return categories;
}

async function findCategoriesByTestTeacher(teacherId: number) {
    const tests = await categoryRepository.findCategoriesByTestTeacher(teacherId);

    return tests;
}

export {
    findCategoriesList,
    findCategoriesByTestTeacher,
};
