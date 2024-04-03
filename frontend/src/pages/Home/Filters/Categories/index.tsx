// funções
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import http from '@/http'
import { error } from '@/utils/feedbacks'

// componentes
import StyledDiv from './styles'
import Select from '@/components/Select'

// actions e states globais
import { setGames, selectGames, fetchGames } from '@/app/reducers/games'
import {
    selectSearchValue,
    selectSelectedOpt,
    setSelectedOpt,
} from '@/app/reducers/filters'

// tipagens externas
import { IGame } from '@/interfaces/IGame'

const Categories = () => {
    // states globais
    const games = useAppSelector(selectGames)
    const name = useAppSelector(selectSearchValue)
    const selectedOpt = useAppSelector(selectSelectedOpt)
    const dispatch = useAppDispatch()

    // states
    const [selectOpts, setSelectOpts] = useState<string[]>([])

    // encontra as categorias disponíveis
    const foundCategories = () => {
        http.get<IGame[]>('/games').then((res) => {
            const categories = res.data.map((game) => game.category)
            const uniqueCategories = categories.filter(
                (game, index) => categories.indexOf(game) === index,
            )
            setSelectOpts(uniqueCategories)
            if (games.length === categories.length) {
                dispatch(setSelectedOpt('Qualquer'))
            }
        })
    }

    // faz a seleção da categoria
    const selectCategory = (category: string) => {
        http.get(`/games/search?category=${category}&name=${name}`)
            .then((res) => {
                dispatch(setSelectedOpt(category))
                dispatch(setGames(res.data.game))
            })
            .catch((err) => {
                if (err.response) {
                    error(err.response.data.message)
                } else {
                    dispatch(fetchGames())
                }
            })
    }

    useEffect(() => {
        foundCategories()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games, selectedOpt])

    return (
        <StyledDiv>
            <p>Categoria:</p>
            <Select selectedOpt={selectedOpt}>
                {selectOpts.map((cat) => (
                    <li key={cat} onClick={() => selectCategory(cat)}>
                        {cat}
                    </li>
                ))}
            </Select>
        </StyledDiv>
    )
}

export default Categories
