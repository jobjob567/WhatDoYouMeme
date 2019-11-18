
class CustomError extends Error {
    constructor(code=500, ...args) {
        super(...args)
        Error.captureStackTrace(this, GoodError)

        this.code=code;
    }
}

module.exports = {
    CustomError
}