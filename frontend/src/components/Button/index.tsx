// componentes
import StyledButton from './styles'

// tipagem dos props
interface ButtonProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (string | React.ReactElement)
    onClick: () => void
    type: 'button' | 'submit'
}

const Button = ({ children, onClick, type = 'button' }: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} type={type}>
            {children}
        </StyledButton>
    )
}

export default Button
