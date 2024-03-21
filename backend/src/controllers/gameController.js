import Game from '../db/models/Game.js'
import NotFound from '../errors/NotFound.js'

class GameController {

    // GET
    static async listGames(req, res, next) {
        try {
            const games = await Game.find({})
            if(games) {
                res.status(200).json(games)
            } else {
                next(new NotFound('Nenhum jogo foi encontrado.'))
            }
        } catch (err) {
            next(err)
        }
    }

    static async listGameById(req, res, next) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            if(game) {
                res.status(200).json({
                    game: game,
                })
            } else {
                next(new NotFound('Jogo não encontrado.'))
            }
            
        } catch (err) {
            next(err)
        }
    }

    // POST
    static async addGame(req, res, next) {
        try {
            const newGame = await Game.create(req.body)
            res.status(201).json({
                message: 'Jogo adcionado com sucesso!',
                game: newGame
            })
        } catch (err) {
            next(err)
        }
    }

    // PUT
    static async updateGame(req, res, next) {
        try {
            const { id } = req.params
            const updatedGame = await Game.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: 'Jogo atualizado com sucesso!',
                game: updatedGame
            })
        } catch (err) {
            next(err)
        }
    }

    // DELETE
    static async deleteGame(req, res, next) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            await Game.findByIdAndDelete(id)
            res.status(200).json({
                message: `O jogo ${game.name} foi deletado.`
            })
        } catch (err) {
            next(err)
        }
    }
}

export default GameController