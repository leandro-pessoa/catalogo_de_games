import Game from '../db/models/Game.js'
import BadRequest from '../errors/BadRequest.js'
import NotFound from '../errors/NotFound.js'
import gameSearch from '../utils/gameSearch.js'

class GameController {
    // GET

    // lista todos os jogos, pela ordem dos mais recentes
    static async listGames(req, res, next) {
        try {
            const games = await Game.find({}).sort({ _id: -1 })

            if (games) {
                res.status(200).json(games)
            } else {
                next(new NotFound('Nenhum jogo foi encontrado.'))
            }
        } catch (err) {
            next(err)
        }
    }

    // lista um jogo, sendo encontrado pelo id
    static async listGameById(req, res, next) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            if (game) {
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

    // realiza a pesquisa de um jogo, seja pelo nome ou categoria
    static async searchGame(req, res, next) {
        try {
            const search = gameSearch(req)
            const game = await Game.find(search)
            if (game.length >= 1) {
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

    // adiciona um novo jogo ao banco de dados
    // também verifica se o jogo já foi adicionado
    static async addGame(req, res, next) {
        try {
            const games = await Game.find({})
            const gamesNames = games.map((game) => game.name.toLowerCase())
            if (gamesNames.includes(req.body.name.toLowerCase())) {
                next(new BadRequest('Esse jogo já foi adicionado.'))
            } else {
                const newGame = await Game.create(req.body)
                res.status(201).json({
                    message: 'Jogo adcionado com sucesso!',
                    game: newGame,
                })
            }
        } catch (err) {
            next(err)
        }
    }

    // PUT

    // realiza a edição de um jogo
    static async updateGame(req, res, next) {
        try {
            const { id } = req.params
            const updatedGame = await Game.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: 'Jogo atualizado com sucesso!',
                game: updatedGame,
            })
        } catch (err) {
            next(err)
        }
    }

    // DELETE

    // exclui um jogo
    static async deleteGame(req, res, next) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            if (game) {
                await Game.findByIdAndDelete(id)
                res.status(200).json({
                    message: `O jogo ${game.name} foi deletado.`,
                })
            } else {
                next(new NotFound('Jogo não encontrado.'))
            }
        } catch (err) {
            next(err)
        }
    }
}

export default GameController
