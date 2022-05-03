import NotFoundError from '../errors/NotFoundError';
import * as categoryRepository from '../repositories/categoryRepository';

async function findCategoriesList() {
    const categories = await categoryRepository.findCategories();

    return categories;
}

async function findCategoriesByTestTeacher(teacherId: number) {
    const tests = await categoryRepository.findCategoriesByTestTeacher(teacherId);

    return tests;
}

async function findCategoryById(categoryId: number) {
    const category = await categoryRepository.findCategoryById(categoryId);

    if (!category) {
        throw new NotFoundError('');
    }

    return category;
}

export {
    findCategoriesList,
    findCategoriesByTestTeacher,
    findCategoryById,
};
