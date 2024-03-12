import BadRequest from './BadRequest.js'

class ValidationError extends BadRequest {
    constructor(err) {
        const msgError = Object.values(err.errors).map((err) => {
            return {
                field: err.properties.path,
                message: err.message,
            }
        })
        super(msgError, 400)
    }
}

export default ValidationError
