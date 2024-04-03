// componentes
import StyledSection from './styles'

// tipagem dos props
interface ContainerProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | (string | React.ReactElement[])
        | (string | undefined)
    verticalAlign?: boolean
}

const Container = ({ children, verticalAlign = false }: ContainerProps) => {
    return <StyledSection $verticalAlign={verticalAlign}>{children}</StyledSection>
}

export default Container
