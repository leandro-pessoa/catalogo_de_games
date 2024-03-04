// componentes
import StyledSection from './styles'

// tipagem dos props
interface ContainerProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | (string | React.ReactElement[])
}

const Container = ({ children }: ContainerProps) => {
    return <StyledSection>{children}</StyledSection>
}

export default Container
