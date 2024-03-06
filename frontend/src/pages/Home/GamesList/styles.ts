// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'center')}
    max-height: 350px;
    overflow-y: auto;
    width: 80%;

    @media (max-width: ${variables.notebook}) {
        width: 90%;
    }
    @media (max-width: ${variables.tablet}) {
        width: 95%;
    }
    @media (max-width: ${variables.smartphone}) {
        width: 100%;
    }
`

const StyledTable = styled.table`
    width: 100%;
    font-size: 1rem;

    thead {
        background-color: ${(props) => props.theme.colors.borderColor};
        position: sticky;
        top: 0;
        z-index: 10;

        th {
            padding: 0.7rem 0;
        }
    }

    button {
        font-size: 1rem;
    }

    svg {
        font-size: 20px;
    }

    @media (max-width: ${variables.notebook}) {
        font-size: 0.9rem;

        button {
            font-size: 0.9rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        font-size: 0.7rem;

        button {
            font-size: 0.7rem;
        }

        svg {
            font-size: 16px;
        }
    }
    @media (max-width: ${variables.smallSmartphone}) {
        font-size: 0.6rem;

        button {
            font-size: 0.6rem;
        }

        svg {
            font-size: 14px;
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

export { StyledDiv, StyledTable, StyledH2 }
