// componentes
import StyledButton from './styles'

// variáveis
import { variables } from '@/variables'

// tipagem dos props
interface ButtonProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (string | React.ReactElement)[]
    onClick?: () => void
    type?: 'button' | 'submit'
    bgColor?: string
}

const Button = ({
    children,
    onClick,
    type = 'button',
    bgColor = variables.red,
}: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} type={type} $bgColor={bgColor}>
            {children}
        </StyledButton>
    )
}

export default Button
