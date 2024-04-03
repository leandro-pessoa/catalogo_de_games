// funções
import http from '@/http'
import { error } from '@/utils/feedbacks'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

// componentes
import StyledInput from './styles'

// actions e states globais
import { setGames } from '@/app/reducers/games'
import {
    selectSearchValue,
    setSearchValue,
    setSelectedOpt,
} from '@/app/reducers/filters'

const Search = () => {
    // states globais
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector(selectSearchValue)

    // handle de busca
    const searchHandle = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            http.get(`/games/search?name=${searchValue}`)
                .then((res) => {
                    dispatch(setGames(res.data.game))
                    dispatch(setSearchValue(''))
                    dispatch(setSelectedOpt('Qualquer'))
                })
                .catch((err) => {
                    if (err.response) {
                        error(err.response.data.message)
                    } else {
                        error('Não foi possível a conexão com o servidor.')
                    }
                })
        }
    }

    return (
        <StyledInput
            placeholder='Pesquisar jogo'
            type='text'
            onKeyDown={(e) => searchHandle(e)}
            value={searchValue}
            onChange={(e) => dispatch(setSearchValue(e.target.value))}
        />
    )
}

export default Search
