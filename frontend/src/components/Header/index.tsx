// componentes
import StyledHeader from './styles'
import ThemeButton from '../ThemeButton'

// imagens
import controllerImg from '/images/controller.png'

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img
                    src={controllerImg}
                    alt='Imagem de um controle de videogame'
                />
                <h1>Games</h1>
            </div>
            <ThemeButton />
        </StyledHeader>
    )
}

export default Header
