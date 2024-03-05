// funções
import iconsParams from '@/utils/iconsParams'
import { useAppSelector } from '@/app/hooks'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdTrash } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

// states globais
import { selectTheme } from '@/app/reducers/app'

const Actions = () => {
    const theme = useAppSelector(selectTheme)

    return (
        <StyledDiv>
            <button>
                <MdEdit {...iconsParams(theme)} size={20} />
            </button>
            <button>
                <IoMdTrash {...iconsParams(theme)} size={20} />
            </button>
        </StyledDiv>
    )
}

export default Actions
