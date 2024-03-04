// funções e tipagens
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// tipagem dos states
interface GamesStates {
    plataforms: string[]
}

// states
const initialState: GamesStates = {
    plataforms: [],
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
    },
})

// export do reducer
export const gamesReducer = gamesSlice.reducer

// export das actions
export const { addPlataform, removePlataform } = gamesSlice.actions

// export dos states
export const selectPlataforms = (state: RootState) => state.games.plataforms
