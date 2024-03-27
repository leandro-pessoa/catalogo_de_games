// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useEffect } from 'react'

// componentes
import Container from '@/components/Container'
import GamesList from './GamesList'
import Filters from './Filters'
import StyledH2 from './styles'
import Loading from '@/components/Loading'
import Button from '@/components/Button'

// states globais e actions
import {
    selectGames,
    selectGamesStatus,
    fetchGames,
} from '@/app/reducers/games'

// ícones
import { TbReload } from 'react-icons/tb'

const Home = () => {
    // states globais
    const games = useAppSelector(selectGames)
    const gamesStatus = useAppSelector(selectGamesStatus)
    const dispatch = useAppDispatch()

    // dispatch do fetch (busca os dados da API)
    useEffect(() => {
        if (gamesStatus === 'idle') {
            dispatch(fetchGames())
        }
    }, [gamesStatus, dispatch])

    // renderiza na tela um feedback de acordo com o status da requisição
    let content

    if (gamesStatus === 'loading') {
        content = <Loading />
    } else if (gamesStatus === 'succeeded') {
        if (games.length < 1) {
            content = <StyledH2>Não há jogos inseridos na lista.</StyledH2>
        } else {
            content = (
                <>
                    <Filters />
                    <GamesList />
                </>
            )
        }
    } else if (gamesStatus === 'failed') {
        content = (
            <>
                <StyledH2>Erro no carregamento dos dados.</StyledH2>
                <Button onClick={() => dispatch(fetchGames())}>
                    <TbReload size={20}/>
                    Recarregar
                </Button>
            </>
        )
    }

    return <Container>{content}</Container>
}

export default Home
