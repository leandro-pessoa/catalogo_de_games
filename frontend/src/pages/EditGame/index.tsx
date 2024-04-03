// funções
import { useAppSelector } from '@/app/hooks'

// componentes
import Container from '@/components/Container'
import Title from '@/components/Title'
import EditForm from './EditForm'

// states globais
import { selectEditingGame } from '@/app/reducers/games'

const EditGame = () => {
    // states globais
    const editingGame = useAppSelector(selectEditingGame)

    return (
        <Container verticalAlign={editingGame ? false : true}>
            {editingGame ? (
                <EditForm />
            ) : (
                <Title>Nenhum jogo foi selecionado</Title>
            )}
        </Container>
    )
}

export default EditGame
