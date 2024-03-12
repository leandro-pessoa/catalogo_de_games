import express from 'express'
import GameController from '../controllers/gameController.js'

const routes = express.Router()

// GET
routes.get('/games', GameController.listGames)
routes.get('/games/:id', GameController.listGameById)

// POST
routes.post('/games', GameController.addGame)

// PUT
routes.put('/games/:id', GameController.updateGame)

// DELETE
routes.delete('/games/:id', GameController.deleteGame)

export default routes