// componentes
import StyledH2 from './styles'

// tipagem dos props
interface TitleProps {
    children:
        | React.ReactNode
        | React.ReactNode[]
        | string
        | (React.ReactNode | string)[]
}

const Title = ({ children }: TitleProps) => {
    return <StyledH2>{children}</StyledH2>
}

export default Title
