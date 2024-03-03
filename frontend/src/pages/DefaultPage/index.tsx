// componentes
import Nav from '@/components/Nav'
import StyledDiv from './styles'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'

const DefaultPage = () => {
    return (
        <StyledDiv>
            <Nav />
            <main>
                <Header />
                <Outlet />
            </main>
        </StyledDiv>
    )
}

export default DefaultPage
