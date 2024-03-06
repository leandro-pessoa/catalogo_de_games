// funções
import { variables } from '@/variables'
import styled from 'styled-components'

const StyledInput = styled.input`
    background-color: ${(props) => props.theme.colors.borderColor};
    border: none;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.fontColor};
    padding: 0.3rem 0.5rem;
    box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);

    &:focus {
        outline: 2px solid ${variables.red};
    }
`

export default StyledInput
