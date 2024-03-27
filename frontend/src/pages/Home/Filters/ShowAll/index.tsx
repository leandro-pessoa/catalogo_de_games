// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { error } from '@/utils/feedbacks'
import http from '@/http'
import { useEffect, useState } from 'react'

// componentes
import Button from '@/components/Button'

// actions e states
import { setGames, selectGames } from '@/app/reducers/games'

// tipagens externas
import { IGame } from '@/interfaces/IGame'

// ícones
import { TbReload } from 'react-icons/tb'

const ShowAll = () => {
    // states globais
    const dispatch = useAppDispatch()
    const games = useAppSelector(selectGames)

    // states
    const [allGames, setAllGames] = useState<IGame[]>([])
    const [btnDisplay, setBtnDisplay] = useState<boolean>(false)

    // mostra todos os jogos integrantes da base de dados
    const showAll = async () => {
        http.get('/games')
            .then((res) => dispatch(setGames(res.data)))
            .catch((err) => {
                if (err.response) {
                    error(err.response.data.message)
                } else {
                    error('Não foi possível a conexão com o servidor.')
                }
            })
    }

    useEffect(() => {
        http.get('/games').then((res) => setAllGames(res.data))
        if (
            games.length !== allGames.length &&
            allGames.length >= 1 &&
            games.length >= 1
        ) {
            setBtnDisplay(true)
        } else {
            setBtnDisplay(false)
        }
    }, [allGames.length, games.length])

    return (
        btnDisplay && (
            <Button onClick={showAll}>
                <TbReload size={20} />
            </Button>
        )
    )
}

export default ShowAll
