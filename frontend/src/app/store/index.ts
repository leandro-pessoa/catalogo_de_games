// funções
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '../reducers/app'
import { gamesReducer } from '../reducers/games'

export const store = configureStore({
    reducer: {
        app: appReducer,
        games: gamesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
