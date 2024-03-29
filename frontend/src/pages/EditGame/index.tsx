// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Container from '@/components/Container'
import Title from '@/components/Title'

// states globais
import { selectEditingGame } from '@/app/reducers/app'

const EditGame = () => {
    // states globais
    const editingGame = useAppSelector(selectEditingGame)

    return (
        <Container>
            {editingGame ? (
                <p>Editar jogo</p>
            ) : (
                <Title>Nenhum jogo foi selecionado</Title>
            )}
        </Container>
    )
}

export default EditGame
