// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    position: relative;
    p {
        position: absolute;
        bottom: 120%;
        font-size: 1.1rem;
    }

    @media (max-width: ${variables.tablet}) {
        p {
            font-size: 1rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        p {
            font-size: 0.9rem;
        }
    }
`

export default StyledDiv
