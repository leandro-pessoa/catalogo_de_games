// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledButton = styled.button`
    ${flex('row', 'auto', 'center', '.5rem')}
    width: max-content;
    background-color: ${variables.red};
    font-family: ${variables.primaryFont};
    font-size: 1.2rem;
    color: ${variables.white};
    border: none;
    padding: 0.3rem 0.5rem;
    transition: 0.1s;
    margin-top: 1rem;

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: translate(1px, 1px);
        background-color: ${variables.red}ea;
    }
`

export default StyledButton
