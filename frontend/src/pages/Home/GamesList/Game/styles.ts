// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledTr = styled.tr`
    td {
        border-bottom: 2px solid ${variables.red};
        padding: 1rem 0;
        text-align: center;
    }
`

export default StyledTr
