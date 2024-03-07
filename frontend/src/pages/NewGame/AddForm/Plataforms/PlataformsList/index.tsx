// funções
import { useAppSelector, useAppDispatch } from "@/app/hooks"

// componentes
import StyledUl from "./styles"
import Button from '@/components/Button'

// states globais e actions
import { removePlataform, selectPlataforms } from "@/app/reducers/plataform"

// ícones
import { IoCloseOutline } from 'react-icons/io5'

const PlataformsList = () => {
    // states globais
    const plataforms = useAppSelector(selectPlataforms)
    const dispatch = useAppDispatch()

    // handle de remover
    const removeHandle = (plataform: string) => {
        dispatch(removePlataform(plataform))
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