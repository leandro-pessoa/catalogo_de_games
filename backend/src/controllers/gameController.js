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

    static async listGameById(req, res) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            res.status(200).json({
                game: game
            })
        } catch (err) {
            res.status(500).json({
                message: 'Erro interno do servidor.'
            })
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

    // PUT
    static async updateGame(req, res) {
        try {
            const { id } = req.params
            const updatedGame = await Game.findByIdAndUpdate(id, req.body)
            res.status(200).json({
                message: 'Jogo atualizado com sucesso!',
                game: updatedGame
            })
        } catch (err) {
            res.status(500).json({
                message: 'Erro interno do servidor.'
            })
        }
    }

    // DELETE
    static async deleteGame(req, res) {
        try {
            const { id } = req.params
            const game = await Game.findById(id)
            await Game.findByIdAndDelete(id)
            res.status(200).json({
                message: `O jogo ${game.name} foi deletado.`
            })
        } catch (err) {
            res.status(500).json({
                message: 'Erro interno do servidor.'
            })
        }
    }
}

export default GameController