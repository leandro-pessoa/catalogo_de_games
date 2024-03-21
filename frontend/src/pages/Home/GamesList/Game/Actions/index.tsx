// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

// states globais
import { selectTheme } from '@/app/reducers/app'

// actions
import { changeModalDisplay, changeModalType } from '@/app/reducers/app'
import { selectGames, setRemovingGame } from '@/app/reducers/games'

// variáveis
import { variables } from '@/variables'

// tipagem dos props
interface ActionsProps {
    gameId: string
}

const Actions = ({ gameId }: ActionsProps) => {
    // states globais
    const theme = useAppSelector(selectTheme)
    const games = useAppSelector(selectGames)
    const dispatch = useAppDispatch()

    const iconsColor = theme === 'dark' ? variables.white : variables.darkGray

    // handle para abrir o modal de exclusão
    const deleteHandle = () => {
        const removingGame = games.find((game) => game._id === gameId)

        dispatch(changeModalType('delete'))
        dispatch(setRemovingGame(removingGame))
        dispatch(changeModalDisplay(true))
    }

    return (
        <StyledDiv>
            <button>
                <MdEdit color={iconsColor} />
            </button>
            <button onClick={() => deleteHandle()}>
                <IoMdTrash color={iconsColor} />
            </button>
        </StyledDiv>
    )
}

export default Actions
