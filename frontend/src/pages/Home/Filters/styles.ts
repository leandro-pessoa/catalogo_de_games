// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    width: 80%;
    padding: 0.5rem 0;

    @media (max-width: ${variables.notebook}) {
        width: 90%;
    }
    @media (max-width: ${variables.tablet}) {
        width: 95%;
    }
`

export default StyledDiv
