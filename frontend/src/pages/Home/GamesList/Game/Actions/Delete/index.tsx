// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { error, success } from '@/utils/feedbacks'
import http from '@/http'

// componentes
import Modal from '@/components/Modal'

// actions
import { removeGame, selectRemovingGame } from '@/app/reducers/games'
import { changeModalDisplay } from '@/app/reducers/app'

const Delete = () => {
    // states globais
    const dispatch = useAppDispatch()
    const removingGame = useAppSelector(selectRemovingGame)

    const deleteHandle = () => {
        if (removingGame) {
            http.delete(`/games/${removingGame._id}`)
                .then((res) => {
                    dispatch(removeGame(removingGame.id))
                    dispatch(changeModalDisplay(false))
                    success(res.data.message)
                })
                .catch((err) => {
                    if (err.response) {
                        error(err.response.data.message)
                    } else {
                        error('Não foi possível a conexão com o servidor.')
                    }
                })
        }
    }

    return (
        <Modal action={() => deleteHandle()} title='Excluir jogo'>
            <p>
                Tem certeza que deseja excluir o jogo com o nome{' '}
                {removingGame?.name}?
            </p>
        </Modal>
    )
}

export default Delete
