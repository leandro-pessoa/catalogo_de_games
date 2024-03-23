import mongoose from 'mongoose'
import BaseError from '../errors/BaseError.js'
import BadRequest from '../errors/BadRequest.js'
import ValidationError from '../errors/ValidationError.js'

// eslint-disable-next-line no-unused-vars
const errors = (err, req, res, next) => {
    if (err instanceof mongoose.Error.CastError) {
        new BadRequest().sendResponse(res)
    } else if (err instanceof mongoose.Error.ValidationError) {
        new ValidationError(err).sendResponse(res)
    } else if (err instanceof BaseError) {
        err.sendResponse(res)
    } else {
        new BaseError().sendResponse(res)
    }
}

export default errors
