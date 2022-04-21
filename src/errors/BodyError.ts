class BodyError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'BodyError';
    }
}

export default BodyError;
