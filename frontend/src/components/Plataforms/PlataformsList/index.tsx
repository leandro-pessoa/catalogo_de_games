// funções e tipagens
import { Dispatch, SetStateAction } from 'react'

// componentes
import StyledUl from './styles'
import Button from '@/components/Button'

// ícones
import { IoCloseOutline } from 'react-icons/io5'

// tipagem dos props
interface PlataformsListProps {
    plataforms: string[]
    setPlataforms: Dispatch<SetStateAction<string[]>>
}

const PlataformsList = ({ plataforms, setPlataforms }: PlataformsListProps) => {
    // handle de remover
    const removeHandle = (ePlataform: string) => {
        setPlataforms(
            plataforms.filter((plataform) => plataform !== ePlataform),
        )
    }

    return (
        <StyledUl>
            {plataforms.map((plataform) => (
                <li key={plataform}>
                    {plataform}
                    <Button onClick={() => removeHandle(plataform)}>
                        <IoCloseOutline />
                    </Button>
                </li>
            ))}
        </StyledUl>
    )
}

export default PlataformsList
