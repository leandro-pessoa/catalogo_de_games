// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledHeader = styled.header`
    ${flex('row', 'space-between', 'center')}
    padding: .5rem 3rem;

    div {
        ${flex('row', 'auto', 'center', '1rem')}
        h1 {
            font-family: ${variables.secondaryFont};
            font-size: 3rem;
        }
        img {
            width: 80px;
        }
    }
`

export default StyledHeader
