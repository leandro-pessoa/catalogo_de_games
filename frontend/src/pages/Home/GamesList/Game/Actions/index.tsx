// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

// states globais
import { selectTheme } from '@/app/reducers/app'

// variáveis
import { variables } from '@/variables'

const Actions = () => {
    // states globais
    const theme = useAppSelector(selectTheme)

    const iconsColor = theme === 'dark' ? variables.white : variables.darkGray

    return (
        <StyledDiv>
            <button>
                <MdEdit color={iconsColor}/>
            </button>
            <button>
                <IoMdTrash color={iconsColor}/>
            </button>
        </StyledDiv>
    )
}

export default Actions
