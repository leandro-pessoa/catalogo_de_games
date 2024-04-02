// componentes
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DefaultPage from './pages/DefaultPage'
import NewGame from './pages/NewGame'
import EditGame from './pages/EditGame'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='novo-jogo' element={<NewGame />} />
                    <Route path='editar-jogo' element={<EditGame />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
