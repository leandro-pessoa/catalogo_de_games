// funções e tipagens
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// tipagem dos states
interface PlataformStates {
    plataforms: string[]
    plataform: string
}

// declaração dos states
const initialState: PlataformStates = {
    plataforms: [],
    plataform: '',
}

const plataformSlice = createSlice({
    name: 'plataform',
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
    },
})

// export do reducer
export const plataformReducer = plataformSlice.reducer

// export das actions
export const {
    addPlataform,
    removePlataform,
    removeAllPlataforms,
    setPlataform,
} = plataformSlice.actions

// export dos states
export const selectPlataforms = (state: RootState) => state.plataforms.plataforms
export const selectPlataform = (state: RootState) => state.plataforms.plataform
