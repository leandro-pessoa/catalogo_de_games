// funções e tipagens
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { PayloadAction } from '@reduxjs/toolkit'

// tipagem dos states
interface AppStates {
    theme: string
    navDisplay: boolean
}

// declaração dos states
const initialState: AppStates = {
    theme: 'light',
    navDisplay: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
        changeNavDisplay: (state, action: PayloadAction<boolean>) => {
            state.navDisplay = action.payload
        },
    },
})

// export do reducer
export const appReducer = appSlice.reducer

// export das actions
export const { toggleTheme, changeNavDisplay } = appSlice.actions

// export dos states
export const selectTheme = (state: RootState) => state.app.theme
export const selectNavDisplay = (state: RootState) => state.app.navDisplay
