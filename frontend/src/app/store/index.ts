// funções
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '../reducers/app'
import { gamesReducer } from '../reducers/games'
import { filtersReducer } from '../reducers/filters'

export const store = configureStore({
    reducer: {
        app: appReducer,
        games: gamesReducer,
        filters: filtersReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
