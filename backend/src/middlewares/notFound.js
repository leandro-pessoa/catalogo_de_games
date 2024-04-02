import NotFound from '../errors/NotFound.js'

// middleware específico para os erros
const notFound = (req, res, next) => {
    const err = new NotFound()
    next(err)
}

export default notFound