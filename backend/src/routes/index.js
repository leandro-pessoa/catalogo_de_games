import games from './gamesRoutes.js'
import express from 'express'

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send('Rota base'))
    app.use(express.json(), games)
}

export default routes