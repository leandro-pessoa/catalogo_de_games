import Game from '../db/models/Game.js'

class GameController {

    // GET
    static async listGames(req, res) {
        try {
            const games = await Game.find({})
            res.status(200).json(games)
        } catch (err) {
            console.log(err)
        }
    }

    // POST
    static async addGame(req, res) {
        try {
            const newGame = await Game.create(req.body)
            res.status(201).json({
                message: 'Jogo adcionado com sucesso!',
                game: newGame
            })
        } catch (err) {
            res.status(500).json({
                message: 'Erro interno do servidor.'
            })
            console.log(err)
        }
    }
}

export default GameController