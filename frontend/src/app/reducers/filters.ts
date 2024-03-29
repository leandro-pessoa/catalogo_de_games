// funções e tipagens
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

// tipagem dos states
interface States {
    searchValue: string
    selectedOpt: string
}

// declaração inicial dos states
const initialState: States = {
    searchValue: '',
    selectedOpt: 'Qualquer',
}

// criação do slice
const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSelectedOpt: (state, action: PayloadAction<string>) => {
            state.selectedOpt = action.payload
        },
    },
})

// export do reducer
export const filtersReducer = filtersSlice.reducer

// export das actions
export const { setSearchValue, setSelectedOpt } = filtersSlice.actions

// export dos states
export const selectSearchValue = (state: RootState) => state.filters.searchValue
export const selectSelectedOpt = (state: RootState) => state.filters.selectedOpt
