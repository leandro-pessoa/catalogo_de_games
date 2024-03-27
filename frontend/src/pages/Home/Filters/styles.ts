// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'space-between', 'center')}
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
