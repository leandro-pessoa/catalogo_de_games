// funções
import styled from 'styled-components'

// componentes
import { NavLink } from 'react-router-dom'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface StyledNavLinkProps {
    readonly $display: boolean
}

const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
    ${flex('row', 'auto', 'center', '.5rem')}
    color: ${(props) => props.theme.colors.fontColor};
    text-decoration: none;
    border-radius: 4px;
    padding: 0.5rem 0.7rem;

    &:hover {
        cursor: pointer;
    }

    &.active {
        background-color: ${(props) => props.theme.colors.fontColor};
        color: ${(props) => props.theme.colors.backgroundColor};
    }

    span {
        display: ${(props) => (props.$display ? 'flex' : 'none')};
    }

    @media (max-width: ${variables.tablet}) {
        span {
            display: none;
        }
    }
`

export default StyledNavLink
