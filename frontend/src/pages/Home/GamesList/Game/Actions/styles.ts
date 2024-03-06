// funções
import styled from 'styled-components'

// variaveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'center', 'center', '.4rem')}
    button {
        background-color: transparent;
        border: none;
        transition: 0.1s;
        font-size: 1.2rem;

        &:hover {
            cursor: pointer;
        }
        &:active {
            transform: translate(0.5px, 0.5px);
        }
    }

    @media (max-width: ${variables.notebook}) {
        gap: 0;
    }
    @media (max-width: ${variables.smartphone}) {
        button {
            font-size: 0.9rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        button {
            font-size: 0.8rem;
        }
    }
`

export default StyledDiv
