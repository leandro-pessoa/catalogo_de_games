// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    grid-column: 1 / 3;

    div {
        ${flex('row', 'auto', 'center', '1rem')}

        button {
            padding: 0.17rem 0.8rem;
        }
    }

    @media (max-width: ${variables.smartphone}) {
        div {
            ${flex('column', 'auto', 'flex-start', '1rem')}
            position: relative;

            button {
                position: absolute;
                right: 0;
            }
        }
    }
`

export default StyledDiv
