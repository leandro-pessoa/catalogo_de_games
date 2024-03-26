// funções
import http from '@/http'
import { useState } from 'react'
import { error } from '@/utils/feedbacks'
import { useAppDispatch } from '@/app/hooks'

// componentes
import StyledInput from './styles'

// actions
import { setGames } from '@/app/reducers/games'

const Search = () => {
    // states globais
    const dispatch = useAppDispatch()

    // states
    const [searchValue, setSearchValue] = useState<string>('')

    // handle de busca
    const searchHandle = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            http.get(`/games/search?name=${searchValue}`)
                .then((res) => dispatch(setGames(res.data.game)))
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
            onChange={(e) => setSearchValue(e.target.value)}
        />
    )
}

export default Search
