import NotFound from '../errors/NotFound.js'

const notFound = (req, res, next) => {
    const err = new NotFound()
    next(err)
}

export default notFound