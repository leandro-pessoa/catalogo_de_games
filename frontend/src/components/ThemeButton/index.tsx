// funções
import { useAppSelector, useAppDispatch } from '@/app/hooks/index.ts'
import iconsParams from '@/utils/iconsParams.ts'

// componentes
import StyledButton from './styles.ts'

// ícones
import { MdOutlineDarkMode } from 'react-icons/md'
import { MdOutlineLightMode } from 'react-icons/md'

// states globais
import { selectTheme } from '@/app/reducers/app.ts'

// actions
import { toggleTheme } from '@/app/reducers/app.ts'

const ThemeButton = () => {
    // states globais
    const dispatch = useAppDispatch()
    const theme = useAppSelector(selectTheme)

    return (
        <StyledButton onClick={() => dispatch(toggleTheme())} aria-label='Mudar tema'>
            {theme === 'light' ? (
                <MdOutlineDarkMode {...iconsParams(theme)} />
            ) : (
                <MdOutlineLightMode {...iconsParams(theme)} />
            )}
        </StyledButton>
    )
}

export default ThemeButton