// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledH2 = styled.h2`
    ${flex('row', 'center', 'center')}
    font-size: 1.6rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid ${variables.red};
    text-align: center;

    @media (max-width: ${variables.notebook}) {
        font-size: 1.4rem;
    }
    @media (max-width: ${variables.tablet}) {
        font-size: 1.3rem;
    }
    @media (max-width: ${variables.smartphone}) {
        font-size: 1.1rem;
        height: 50vh;
    }
`

export default StyledH2
