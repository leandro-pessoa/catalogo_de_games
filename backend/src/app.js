import express from 'express'
import connectDatabase from './db/connectDatabase.js'
import routes from './routes/index.js'
import errors from './middlewares/errors.js'
import notFound from './middlewares/notFound.js'
import cors from 'cors'

const connect = await connectDatabase()
connect.once('open', () => console.log('Conectado ao banco de dados'))

const app = express()
app.use(cors())
routes(app)
app.use(notFound)

app.use(errors)

export default app