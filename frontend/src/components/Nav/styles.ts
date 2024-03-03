// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface NavProps {
    readonly $display: boolean
}

const StyledNav = styled.nav<NavProps>`
    ${flex('column', 'flex-start', 'auto', '1rem')}
    padding: ${(props) => (props.$display ? '2.5rem 3rem' : '2.5rem 2rem')};
    height: 100vh;
    width: ${(props) => (props.$display ? '180px' : 'auto')};
    border-right: 2px solid ${(props) => props.theme.colors.borderColor};
    transition: ease 0.3s;

    div {
        margin-bottom: 2rem;
        display: flex;
        justify-content: ${(props) =>
            props.$display ? 'flex-start' : 'center'};
        .nav__menu-btn {
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
    }

    ul {
        ${flex('column', 'flex-start', 'auto', '2rem')}

        li {
            font-size: 1.2rem;
        }
    }

    @media (max-width: ${variables.notebook}) {
        padding: ${(props) => (props.$display ? '2.5rem 2rem' : '2.5rem 1rem')};
    }
    @media (max-width: ${variables.tablet}) {
        padding: 1rem;
        width: auto;

        .nav__menu-btn {
            display: none;
        }
    }
`

export default StyledNav
