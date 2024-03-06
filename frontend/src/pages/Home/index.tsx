// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Container from '@/components/Container'
import GamesList from './GamesList'
import Filters from './Filters'
import StyledH2 from './styles'

// states globais
import { selectGames } from '@/app/reducers/games'

const Home = () => {
    // states globais
    const games = useAppSelector(selectGames)

    return (
        <Container>
            {games.length >= 1 ? (
                <>
                    <Filters />
                    <GamesList />
                </>
            ) : (
                <StyledH2>Não há jogos inseridos na lista</StyledH2>
            )}
        </Container>
    )
}

export default Home
