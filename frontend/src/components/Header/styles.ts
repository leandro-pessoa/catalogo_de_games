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

    @media (max-width: ${variables.tablet}) {
        div {
            h1 {
                font-size: 2.5rem;
            }
        }
    }
    @media (max-width: ${variables.smartphone}) {
        padding: 0.5rem 2rem;
        margin-bottom: 1rem;

        div {
            h1 {
                font-size: 2rem;
            }
            img {
                width: 70px;
            }
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        padding: 0.5rem 1.2rem;

        div {
            h1 {
                font-size: 1.7rem;
            }
            img {
                width: 60px;
            }
        }
    }
`

export default StyledHeader
