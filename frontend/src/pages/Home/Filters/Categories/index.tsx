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

// tipagens externas
import { IGame } from '@/interfaces/IGame'

const Categories = () => {
    // states globais
    const games = useAppSelector(selectGames)
    const dispatch = useAppDispatch()

    // states
    const [selectOpts, setSelectOpts] = useState<string[]>([])
    const [selectedOpt, setSelectedOpt] = useState<string>('Qualquer')

    // encontra as categorias disponíveis
    const foundCategories = () => {
        http.get<IGame[]>('/games').then((res) => {
            const categories = res.data.map((game) => game.category)
            const uniqueCategories = categories.filter(
                (game, index) => categories.indexOf(game) === index,
            )
            setSelectOpts(uniqueCategories)
            if (games.length === categories.length) {
                setSelectedOpt('Qualquer')
            }
        })
    }

    // faz a seleção da categoria
    const selectCategory = (category: string) => {
        http.get(`/games/search?category=${category}`)
            .then((res) => {
                setSelectedOpt(category)
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
    }, [games])

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
