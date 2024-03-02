// funções
import { useAppSelector } from './app/hooks'

// componentes
import AppRoutes from './routes'
import GlobalStyles from './components/GlobalStyles'
import { ThemeProvider } from 'styled-components'

// states globais
import { selectTheme } from './app/reducers/app'

// temas
import { darkTheme, lightTheme } from './components/Theme'

const App = () => {
    // states globais
    const theme = useAppSelector(selectTheme)

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <AppRoutes />
        </ThemeProvider>
    )
}

export default App
