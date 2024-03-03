// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import StyledNavLink from './styles'

// states globais
import { selectNavDisplay } from '@/app/reducers/app'

// tipagem dos props
interface NavLinkProps {
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (string | React.ReactElement)[]
    to: string
}

const NavLink = ({ children, to }: NavLinkProps) => {
    // states globais
    const navDisplay = useAppSelector(selectNavDisplay)

    return (
        <StyledNavLink
            to={to}
            className={({ isActive }) => `${isActive ? 'active' : ''}`}
            $display={navDisplay}
        >
            {children}
        </StyledNavLink>
    )
}

export default NavLink
