// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledUl = styled.ul`
    ${flex('row', 'flex-start', 'center', '1rem')}
    flex-wrap: wrap;
    margin-top: 1rem;

    li {
        ${flex('row', 'auto', 'center', '.5rem')}
        font-size: 1.1rem;
        background-color: ${(props) => props.theme.colors.fontColor};
        color: ${(props) => props.theme.colors.backgroundColor};
        padding: 0.3rem 0.5rem;
    }

    @media (max-width: ${variables.smartphone}) {
        li {
            font-size: .9rem;
        }
    }
`

export default StyledUl
