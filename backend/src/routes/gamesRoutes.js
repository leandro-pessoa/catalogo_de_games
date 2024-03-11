import express from 'express'
import GameController from '../controllers/gameController.js'

const routes = express.Router()

// GET
routes.get('/games', GameController.listGames)

// POST
routes.post('/games', GameController.addGame)

export default routes