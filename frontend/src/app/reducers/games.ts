// funções e tipagens
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IGame } from '@/interfaces/IGame'

// tipagem dos states
interface GamesStates {
    games: IGame[]
    removingGame: IGame | undefined
}

// states
const initialState: GamesStates = {
    games: [],
    removingGame: undefined
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
        },
        setRemovingGame: (state, action: PayloadAction<IGame | undefined>) => {
            state.removingGame = action.payload
        }
    },
})

// export do reducer
export const gamesReducer = gamesSlice.reducer

// export das actions
export const {
    addGame,
    removeGame,
    setRemovingGame
} = gamesSlice.actions

// export dos states
export const selectGames = (state: RootState) => state.games.games
export const selectRemovingGame = (state: RootState) => state.games.removingGame
