// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledTable = styled.table`
    width: 85%;
    overflow-x: auto;

    thead {
        background-color: ${(props) => props.theme.colors.borderColor};

        th {
            padding: 0.7rem 0;
        }
    }

    button {
        font-size: 1rem;
    }

    @media (max-width: ${variables.notebook}) {
        width: 97%;
        font-size: 0.9rem;

        button {
            font-size: 0.9rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        width: 100%;
        font-size: 0.7rem;

        button {
            font-size: 0.7rem;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        width: 100%;
        font-size: 0.5rem;

        button {
            font-size: 0.5rem;
        }
    }
`

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

export { StyledTable, StyledH2 }
