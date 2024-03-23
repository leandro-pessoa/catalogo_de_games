import BaseError from './BaseError.js'

class BadRequest extends BaseError {
    constructor(msg = 'Requisição incorreta.') {
        super(msg, 400)
    }
}

export default BadRequest
