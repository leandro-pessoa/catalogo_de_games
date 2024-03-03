// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Nav from '@/components/Nav'
import StyledDiv from './styles'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

// states globais
import { selectNavDisplay } from '@/app/reducers/app'

const DefaultPage = () => {
    // states globais
    const navDisplay = useAppSelector(selectNavDisplay)

    return (
        <StyledDiv $display={navDisplay}>
            <Nav />
            <main>
                <Header />
                <Outlet />
            </main>
        </StyledDiv>
    )
}

export default DefaultPage
