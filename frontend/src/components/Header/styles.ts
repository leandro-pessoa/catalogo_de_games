// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledHeader = styled.header`
    ${flex('row', 'auto', 'center', '1rem')}
    padding: .5rem 3rem;
    /* border-bottom: 2px solid ${(props) => props.theme.colors.borderColor}; */

    h1 {
        font-family: ${variables.secondaryFont};
        font-size: 3rem;
    }

    img {
        width: 80px;
    }
`

export default StyledHeader
