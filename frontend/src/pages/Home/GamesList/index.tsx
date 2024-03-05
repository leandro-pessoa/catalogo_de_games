// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import { StyledTable, StyledH2 } from './styles'
import Game from './Game'

// states globais
import { selectGames } from '@/app/reducers/games'

const GamesList = () => {
    // states globais
    const games = useAppSelector(selectGames)

    return (
        <>
            {games.length >= 1 ? (
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
            ) : (
                <StyledH2>Não há jogos inseridos na lista</StyledH2>
            )}
        </>
    )
}

export default GamesList
