// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'center')}
    width: 80%;
    max-height: 350px;
    overflow: auto;

    @media (max-width: ${variables.notebook}) {
        width: 90%;
    }
    @media (max-width: ${variables.tablet}) {
        width: 95%;
    }
    @media (max-width: ${variables.smartphone}) {
        width: 100%;
        max-height: 300px;
    }
`

const StyledTable = styled.table`
    width: 100%;
    font-size: 1rem;

    thead {
        background-color: ${(props) => props.theme.colors.borderColor};
        position: sticky;
        top: 0;

        th {
            padding: 0.7rem 0;
        }
    }

    tbody {
        td {
            vertical-align: middle;
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

export { StyledDiv, StyledTable }
