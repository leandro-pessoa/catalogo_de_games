// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Nav from '@/components/Nav'
import StyledDiv from './styles'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header'
import { Flip, ToastContainer } from 'react-toastify'
import RenderModal from '@/components/Modal/RenderModal'

// states globais
import { selectNavDisplay } from '@/app/reducers/app'

const DefaultPage = () => {
    // states globais
    const navDisplay = useAppSelector(selectNavDisplay)

    return (
        <>
            <ToastContainer
                position='top-center'
                theme='colored'
                hideProgressBar
                transition={Flip}
            />
            <RenderModal />
            <StyledDiv $display={navDisplay}>
                <Nav />
                <main>
                    <Header />
                    <Outlet />
                </main>
            </StyledDiv>
        </>
    )
}

export default DefaultPage
