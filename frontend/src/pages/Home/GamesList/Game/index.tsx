// componentes
import StyledTr from './styles'

// tipagem dos props
interface GameProps {
    name: string
    category: string
    publish: string
    plataforms: string[]
}

const Game = ({ name, category, publish, plataforms }: GameProps) => {
    return (
        <StyledTr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{publish}</td>
            <td>{plataforms}</td>
        </StyledTr>
    )
}

export default Game
