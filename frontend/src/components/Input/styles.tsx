// funções
import styled from 'styled-components'

// variáveis
import { variables } from '@/variables'

const StyledDiv = styled.div`
    width: 100%;

    span {
        display: block;
        color: ${variables.lightRed};
        font-size: 0.8rem;
        margin-top: 0.4rem;
    }

    @media (max-width: ${variables.smartphone}) {
        span {
            font-size: 0.7rem;
        }
    }
`

const StyledInput = styled.input`
    background-color: ${(props) => props.theme.colors.backgroundColor};
    border: none;
    font-size: 1.1rem;
    color: ${(props) => props.theme.colors.fontColor};
    font-family: ${variables.primaryFont};
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);
    padding: 0.2rem 0.7rem;
    width: 70%;

    &:focus {
        outline: 2px solid ${variables.red};
    }

    @media (max-width: ${variables.notebook}) {
        width: 80%;
    }
    @media (max-width: ${variables.smartphone}) {
        width: calc(100% - 1.4rem) /* padding interno */;
        font-size: 1rem;
    }
`

export { StyledDiv, StyledInput }
