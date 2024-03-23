import mongoose from 'mongoose'

const GameSchema = mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: [true, 'Insira o nome do jogo'],
    },
    category: {
        type: String,
        required: [true, 'Insira uma categoria'],
    },
    publish: {
        type: Date,
        required: [true, 'Insira a data de lançamento']
    },
    plataforms: {
        type: Array,
        required: [true, 'Insira ao menos uma plataforma']
    }
})

const Game = mongoose.model('Game', GameSchema)

export default Game
