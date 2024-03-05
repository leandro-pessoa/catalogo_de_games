// componentes
import StyledTr from './styles'
import PlataformsDropdown from './PlataformsDropdown'
import Actions from './Actions'

// tipagem dos props
interface GameProps {
    name: string
    category: string
    publish: string
    plataforms: string[]
}

const Game = ({ name, category, publish, plataforms }: GameProps) => {
    const formattedPublish = new Date(publish).toLocaleDateString()

    return (
        <StyledTr>
            <td>{name}</td>
            <td>{category}</td>
            <td>{formattedPublish}</td>
            <td>
                <PlataformsDropdown plataforms={plataforms} />
            </td>
            <td>
                <Actions />
            </td>
        </StyledTr>
    )
}

export default Game
