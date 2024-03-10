// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { success } from '@/utils/feedbacks'

// componentes
import Modal from "@/components/Modal"

// actions
import { removeGame, selectRemovingGame } from '@/app/reducers/games'
import { changeModalDisplay } from '@/app/reducers/app'

const Delete = () => {
    // states globais
    const dispatch = useAppDispatch()
    const removingGame = useAppSelector(selectRemovingGame)

    const deleteHandle = () => {
        if(removingGame) {
            dispatch(removeGame(removingGame.id))
            dispatch(changeModalDisplay(false))
            success(`${removingGame.name} removido com sucesso!`)
        }
    }

    return (
        <Modal action={() => deleteHandle()} title="Excluir jogo">
            <p>Tem certeza que deseja excluir o jogo com o nome {removingGame?.name}?</p>
        </Modal>
    )
}

export default Delete