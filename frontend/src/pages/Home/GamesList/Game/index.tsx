// componentes
import StyledTr from './styles'
import Actions from './Actions'
import Dropdown from '@/components/Dropdown'

// tipagem dos props
interface GameProps {
    id: string
    name: string
    category: string
    publish: string
    plataforms: string[]
}

const Game = ({ id, name, category, publish, plataforms }: GameProps) => {
    // formatação da data
    const publishDate = new Date(publish)
    const formattedPublish = new Date(
        publishDate.getTime() + publishDate.getTimezoneOffset() * 60000,
    ).toLocaleDateString()

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
                <Actions gameId={id} />
            </td>
        </StyledTr>
    )
}

export default Game
