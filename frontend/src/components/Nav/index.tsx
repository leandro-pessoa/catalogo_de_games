// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import iconsParams from '@/utils/iconsParams'

// componentes
import StyledNav from './styles'
import NavLink from './NavLink'

// ícones
import { RiMenuFoldLine } from 'react-icons/ri'
import { RiMenuUnfoldLine } from 'react-icons/ri'
import { GoHome } from 'react-icons/go'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { CiEdit } from 'react-icons/ci'

// states globais
import { selectNavDisplay, selectTheme } from '@/app/reducers/app'

// actions
import { changeNavDisplay } from '@/app/reducers/app'

const Nav = () => {
    // states globais
    const navDisplay = useAppSelector(selectNavDisplay)
    const theme = useAppSelector(selectTheme)
    const dispatch = useAppDispatch()

    return (
        <StyledNav $display={navDisplay}>
            <div>
                <button
                    onClick={() => dispatch(changeNavDisplay(!navDisplay))}
                    className='nav__menu-btn'
                >
                    {navDisplay ? (
                        <RiMenuFoldLine {...iconsParams(theme)} />
                    ) : (
                        <RiMenuUnfoldLine {...iconsParams(theme)} />
                    )}
                </button>
            </div>
            <ul>
                <li>
                    <NavLink to='/'>
                        <GoHome size={26} />
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/novo-jogo'>
                        <IoIosAddCircleOutline size={26} />
                        <span>Novo jogo</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/editar-jogo'>
                        <CiEdit size={26} />
                        <span>Editar jogo</span>
                    </NavLink>
                </li>
            </ul>
        </StyledNav>
    )
}

export default Nav
