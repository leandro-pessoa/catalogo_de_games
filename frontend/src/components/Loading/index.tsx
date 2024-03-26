// componentes
import StyledDiv from './styles'

// tipagem dos props
interface LoadingProps {
    overlay?: boolean
}

const Loading = ({ overlay = false }: LoadingProps) => {
    return (
        <StyledDiv $overlay={overlay}>
            <div></div>
        </StyledDiv>
    )
}

export default Loading
