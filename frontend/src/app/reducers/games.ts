// funções e tipagens
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IGame } from '@/interfaces/IGame'

// tipagem dos states
interface GamesStates {
    plataforms: string[]
    plataform: string,
    games: IGame[]
}

// states
const initialState: GamesStates = {
    plataforms: [],
    plataform: '',
    games: []
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addPlataform: (state, action: PayloadAction<string>) => {
            state.plataforms = [...state.plataforms, action.payload]
        },
        removePlataform: (state, action: PayloadAction<string>) => {
            state.plataforms = state.plataforms.filter(
                (plataform) => plataform !== action.payload,
            )
        },
        removeAllPlataforms: (state) => {
            state.plataforms = []
        },
        setPlataform: (state, action: PayloadAction<string>) => {
            state.plataform = action.payload
        },
        addGame: (state, action: PayloadAction<IGame>) => {
            state.games = [...state.games, action.payload]
        }
    },
})

// export do reducer
export const gamesReducer = gamesSlice.reducer

// export das actions
export const {
    addPlataform,
    removePlataform,
    removeAllPlataforms,
    setPlataform,
    addGame
} = gamesSlice.actions

// export dos states
export const selectPlataforms = (state: RootState) => state.games.plataforms
export const selectPlataform = (state: RootState) => state.games.plataform
export const selectGames = (state: RootState) => state.games.games
