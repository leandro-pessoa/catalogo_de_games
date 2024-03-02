// funções
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// tipagem dos states
interface AppStates {
    theme: string
}

// declaração dos states
const initialState: AppStates = {
    theme: 'light'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})

// export do reducer
export const appReducer = appSlice.reducer

// export das actions
export const { toggleTheme } = appSlice.actions

// export dos states
export const selectTheme = (state: RootState) => state.app.theme