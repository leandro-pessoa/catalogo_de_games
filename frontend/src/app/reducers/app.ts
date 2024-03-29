// funções e tipagens
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { PayloadAction } from '@reduxjs/toolkit'
import getTheme from '@/utils/getTheme'
import { IGame } from '@/interfaces/IGame'

// tipagem dos states
interface AppStates {
    theme: string
    navDisplay: boolean
    modalDisplay: boolean
    modalType: string
    editingGame: IGame | undefined
}

// declaração dos states
const initialState: AppStates = {
    theme: getTheme(),
    navDisplay: true,
    modalDisplay: false,
    modalType: '',
    editingGame: undefined,
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
        changeModalDisplay: (state, action: PayloadAction<boolean>) => {
            state.modalDisplay = action.payload
        },
        changeModalType: (state, action: PayloadAction<string>) => {
            state.modalType = action.payload
        },
        setEditingGame: (state, action: PayloadAction<IGame>) => {
            state.editingGame = action.payload
        },
    },
})

// export do reducer
export const appReducer = appSlice.reducer

// export das actions
export const {
    toggleTheme,
    changeNavDisplay,
    changeModalDisplay,
    changeModalType,
    setEditingGame,
} = appSlice.actions

// export dos states
export const selectTheme = (state: RootState) => state.app.theme
export const selectNavDisplay = (state: RootState) => state.app.navDisplay
export const selectModalDisplay = (state: RootState) => state.app.modalDisplay
export const selectModalType = (state: RootState) => state.app.modalType
export const selectEditingGame = (state: RootState) => state.app.editingGame
