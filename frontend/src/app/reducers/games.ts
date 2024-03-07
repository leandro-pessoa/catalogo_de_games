// funções e tipagens
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IGame } from '@/interfaces/IGame'

// tipagem dos states
interface GamesStates {
    games: IGame[]
}

// states
const initialState: GamesStates = {
    games: []
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addGame: (state, action: PayloadAction<IGame>) => {
            state.games = [...state.games, action.payload]
        },
        removeGame: (state, action: PayloadAction<string>) => {
            state.games = state.games.filter((game) => game.id !== action.payload)
        }
    },
})

// export do reducer
export const gamesReducer = gamesSlice.reducer

// export das actions
export const {
    addGame,
    removeGame
} = gamesSlice.actions

// export dos states
export const selectGames = (state: RootState) => state.games.games
