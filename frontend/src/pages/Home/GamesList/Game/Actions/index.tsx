// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useNavigate } from 'react-router-dom'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

// states globais
import { selectTheme } from '@/app/reducers/app'

// actions
import {
    changeModalDisplay,
    changeModalType,
} from '@/app/reducers/app'
import { selectGames, setRemovingGame, setEditingGame } from '@/app/reducers/games'

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

    // tema do ícone
    const iconsColor = theme === 'dark' ? variables.white : variables.darkGray

    // função de navegação
    const navigate = useNavigate()

    // handle para abrir o modal de exclusão
    const deleteHandle = () => {
        const removingGame = games.find((game) => game.id === gameId)
        if(removingGame) {
            dispatch(changeModalType('delete'))
            dispatch(setRemovingGame(removingGame))
            dispatch(changeModalDisplay(true))
        }
    }

    // handle para ir à página de edição
    const editHandle = () => {
        const editingGame = games.find((game) => game.id === gameId)
        if(editingGame) {
            dispatch(setEditingGame(editingGame))
            navigate('/editar-jogo')
        }
    }

    return (
        <StyledDiv>
            <button onClick={() => editHandle()}>
                <MdEdit color={iconsColor} />
            </button>
            <button onClick={() => deleteHandle()}>
                <IoMdTrash color={iconsColor} />
            </button>
        </StyledDiv>
    )
}

export default Actions
