import joi from 'joi';

const testSchema = joi.object({
    name: joi.string().min(3).max(30).required(),
    pdfUrl: joi.string()
        .pattern(/https?:\/\/.*.?.pdf/)
        .required(),
    categoryId: joi.number().integer().required(),
    teacherDisciplineId: joi.number().integer().required(),
});

export {
    testSchema,
};
