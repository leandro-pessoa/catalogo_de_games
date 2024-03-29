// funções
import { configureStore } from '@reduxjs/toolkit'
import { appReducer } from '../reducers/app'
import { gamesReducer } from '../reducers/games'
import { plataformReducer } from '../reducers/plataform'
import { filtersReducer } from '../reducers/filters'

export const store = configureStore({
    reducer: {
        app: appReducer,
        games: gamesReducer,
        plataforms: plataformReducer,
        filters: filtersReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
