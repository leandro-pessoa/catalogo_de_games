// funções
import styled from 'styled-components'

// variaveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'center', 'center', '.4rem')}
    button {
        background-color: transparent;
        border: none;
        transition: .1s;

        &:hover {
            cursor: pointer;
        }
        &:active {
            transform: translate(.5px, .5px);
        }
    }

    @media (max-width: ${variables.notebook}) {
        gap: 0;
    }
`

export default StyledDiv
