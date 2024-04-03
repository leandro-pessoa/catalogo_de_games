// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface DivProps {
    readonly $overlay: boolean
}

const StyledDiv = styled.div<DivProps>`
    ${flex('row', 'center', 'center')}
    ${(props) =>
        props.$overlay &&
        `position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0; `}
    z-index: 14;
    background-color: ${(props) => props.theme.colors.backgroundColor}7f;

    div {
        border: 8px solid ${(props) => props.theme.colors.borderColor};
        border-radius: 50%;
        border-top: 8px solid ${variables.red};
        width: 60px;
        height: 60px;
        animation: spinner 1s linear infinite;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media (max-width: ${variables.smartphone}) {
        div {
            width: 40px;
            height: 40px;
            border-width: 4px;
        }
    }
`

export default StyledDiv
