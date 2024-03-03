// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import iconsParams from '@/utils/iconsParams'

// componentes
import StyledNav from './styles'

// ícones
import { RiMenuFoldLine } from 'react-icons/ri'
import { RiMenuUnfoldLine } from 'react-icons/ri'

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
                <button onClick={() => dispatch(changeNavDisplay(!navDisplay))}>
                    {navDisplay ? (
                        <RiMenuFoldLine {...iconsParams(theme)} />
                    ) : (
                        <RiMenuUnfoldLine {...iconsParams(theme)} />
                    )}
                </button>
            </div>
        </StyledNav>
    )
}

export default Nav
