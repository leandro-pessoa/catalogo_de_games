// funções e tipagens
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { IGame } from '@/interfaces/IGame'
import { error } from '@/utils/feedbacks'
import http from '@/http'

// tipagem dos states
interface GamesStates {
    games: IGame[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    removingGame: IGame | undefined
    editingGame: IGame | undefined
}

// states
const initialState: GamesStates = {
    games: [],
    status: 'idle',
    removingGame: undefined,
    editingGame: undefined,
}

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        addGame: (state, action: PayloadAction<IGame>) => {
            state.games = [action.payload, ...state.games]
        },
        removeGame: (state, action: PayloadAction<string>) => {
            state.games = state.games.filter(
                (game) => game.id !== action.payload,
            )
        },
        setRemovingGame: (state, action: PayloadAction<IGame | undefined>) => {
            state.removingGame = action.payload
        },
        setGames: (state, action: PayloadAction<IGame[]>) => {
            state.games = action.payload
        },
        setEditingGame: (state, action: PayloadAction<IGame | undefined>) => {
            state.editingGame = action.payload
        },
        editGame: (state, action: PayloadAction<IGame>) => {
            state.games = state.games.filter(
                (game) => game.id !== action.payload.id,
            )
            state.games = [...state.games, action.payload]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGames.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchGames.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (action.payload) {
                    state.games = [...action.payload]
                }
            })
            .addCase(fetchGames.rejected, (state) => {
                state.status = 'failed'
            })
    },
})

// export do reducer
export const gamesReducer = gamesSlice.reducer

// export das actions
export const {
    addGame,
    removeGame,
    setRemovingGame,
    setGames,
    setEditingGame,
    editGame,
} = gamesSlice.actions

// export dos states
export const selectGames = (state: RootState) => state.games.games
export const selectGamesStatus = (state: RootState) => state.games.status
export const selectRemovingGame = (state: RootState) => state.games.removingGame
export const selectEditingGame = (state: RootState) => state.games.editingGame

// chamada assíncrona
export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
    try {
        const games = await http.get<IGame[]>('/games')
        return games.data
    } catch (err) {
        error('Não foi possível obter os jogos.')
        return Promise.reject()
    }
})
