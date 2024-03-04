// funções
import { useNavigate } from 'react-router-dom'

// componentes
import Container from '@/components/Container'
import AddForm from './AddForm'
import Button from '@/components/Button'

// ícones
import { IoIosArrowBack } from 'react-icons/io'

const NewGame = () => {
    // função de navegação
    const navigate = useNavigate()

    return (
        <Container>
            <Button onClick={() => navigate(-1)}>
                <IoIosArrowBack />
                Voltar
            </Button>
            <AddForm />
        </Container>
    )
}

export default NewGame
