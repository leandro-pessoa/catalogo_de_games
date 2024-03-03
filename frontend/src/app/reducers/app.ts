// funções e tipagens
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { PayloadAction } from '@reduxjs/toolkit'
import getTheme from '@/utils/getTheme'

// tipagem dos states
interface AppStates {
    theme: string
    navDisplay: boolean
}

// declaração dos states
const initialState: AppStates = {
    theme: getTheme(),
    navDisplay: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme-games', JSON.stringify(state.theme))
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
