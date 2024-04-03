// funções
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 32px;
    padding: 0.3rem 0.4rem;

    &:hover {
        cursor: pointer;
    }

    &:active {
        background-color: ${(props) => props.theme.colors.borderColor};
    }
`

export default StyledButton
