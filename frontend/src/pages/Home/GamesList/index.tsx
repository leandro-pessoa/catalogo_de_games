// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import { StyledDiv, StyledTable } from './styles'
import Game from './Game'

// states globais e actions
import { selectGames } from '@/app/reducers/games'

const GamesList = () => {
    // states globais
    const games = useAppSelector(selectGames)

    return (
        <StyledDiv>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Lançamento</th>
                        <th>Plataformas</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <Game {...game} key={game.id} />
                    ))}
                </tbody>
            </StyledTable>
        </StyledDiv>
    )
}

export default GamesList
