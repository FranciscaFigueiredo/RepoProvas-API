import { repoProvas } from '../database';

async function findTerms() {
    const tests = await repoProvas.term.findMany({ });

    return tests;
}

export {
    findTerms,
};
