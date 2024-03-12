import BaseError from './BaseError.js'

class BadRequest extends BaseError {
    constructor(msg = 'Os dados foram inseridos de forma incorreta.') {
        super(msg, 400)
    }
}

export default BadRequest
