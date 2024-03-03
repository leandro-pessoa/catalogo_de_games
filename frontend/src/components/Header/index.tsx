// componentes
import StyledHeader from "./styles"

// imagens
import controllerImg from '/images/controller.png'

const Header = () => {
    return (
        <StyledHeader>
            <img src={controllerImg} alt="Imagem de um controle de videogame"/>
            <h1>Games</h1>
        </StyledHeader>
    )
}

export default Header