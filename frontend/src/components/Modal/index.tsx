// funções
import { useAppSelector, useAppDispatch } from '@/app/hooks'

// componentes
import { StyledDiv } from './styles'
import Button from '../Button'

// states globais e actions
import { selectModalDisplay, changeModalDisplay } from '@/app/reducers/app'

// tipagem dos props
interface ModalProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (string | React.ReactElement)[]
    action: () => void
}

const Modal = ({ children, action }: ModalProps) => {
    // states globais
    const dispatch = useAppDispatch()
    const modalDisplay = useAppSelector(selectModalDisplay) 

    return (
        <StyledDiv $display={modalDisplay}>
            <div
                className='modal__overlay'
                onClick={() => dispatch(changeModalDisplay(false))}
            ></div>
            <div className='modal__content'>
                {children}
                <div className='modal__btn-container'>
                    <Button onClick={() => dispatch(changeModalDisplay(false))}>
                        Cancelar
                    </Button>
                    <Button onClick={action}>Aceitar</Button>
                </div>
            </div>
        </StyledDiv>
    )
}

export default Modal
