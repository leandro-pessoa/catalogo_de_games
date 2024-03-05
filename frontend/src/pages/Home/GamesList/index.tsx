// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import StyledTable from './styles'
import Game from './Game'

// states globais
import { selectGames } from '@/app/reducers/games'

const GamesList = () => {
    // states globais
    const games = useAppSelector(selectGames)

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Lançamento</th>
                    <th>Plataformas</th>
                </tr>
            </thead>
            <tbody>
                {games.map((game) => (
                    <Game
                        {...game} 
                    />
                ))}
            </tbody>
        </StyledTable>
    )
}

export default GamesList
