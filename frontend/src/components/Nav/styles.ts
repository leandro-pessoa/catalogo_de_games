// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

// tipagem dos props
interface NavProps {
    readonly $display: boolean
}

const StyledNav = styled.nav<NavProps>`
    ${flex('column', 'flex-start', 'auto', '1rem')}
    padding: 2.5rem 3rem;
    height: 100vh;
    width: ${(props) => (props.$display ? '180px' : 'auto')};
    border-right: 2px solid ${(props) => props.theme.colors.borderColor};
    /* background-color: ${(props) => props.theme.colors.backgroundColor}; */
    transition: ease .3s;

    button {
        background-color: transparent;
        border: none;
        border-radius: 32px;
        padding: 0.1rem 0.2rem;
        transition: ease 0.1s;

        &:hover {
            cursor: pointer;
        }
        &:active {
            background-color: ${(props) => props.theme.colors.borderColor};
        }
    }
`

export default StyledNav
