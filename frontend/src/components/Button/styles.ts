// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

// tipagem dos props
interface ButtonProps {
    readonly $bgColor: string
}

const StyledButton = styled.button<ButtonProps>`
    ${flex('row', 'auto', 'center', '.5rem')}
    width: max-content;
    background-color: ${(props) => props.$bgColor};
    font-family: ${variables.primaryFont};
    font-size: 1.2rem;
    color: ${variables.white};
    border: none;
    padding: 0.3rem 0.5rem;
    transition: 0.1s;

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translate(1px, 1px);
        background-color: ${variables.red}ea;
    }

    @media (max-width: ${variables.tablet}) {
        font-size: 1.1rem;
    }
    @media (max-width: ${variables.smartphone}) {
        font-size: 1rem;
    }
`

export default StyledButton
