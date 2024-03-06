// componentes
import StyledTr from './styles'
import Actions from './Actions'
import Dropdown from '@/components/Dropdown'

// tipagem dos props
interface GameProps {
    name: string
    category: string
    publish: string
    plataforms: string[]
}

const Game = ({ name, category, publish, plataforms }: GameProps) => {
    // formatação da data
    const formattedPublish = new Date(publish).toLocaleDateString()

    return (
        <StyledTr>
            <td>{name}</td>
            <td>
                {category.length > 10 ? (
                    <Dropdown element={category} />
                ) : (
                    <span>{category}</span>
                )}
            </td>
            <td>{formattedPublish}</td>
            <td>
                <Dropdown element={plataforms} />
            </td>
            <td>
                <Actions />
            </td>
        </StyledTr>
    )
}

export default Game
