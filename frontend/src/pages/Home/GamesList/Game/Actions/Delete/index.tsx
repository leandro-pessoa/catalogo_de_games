// funções
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { error, success, update } from '@/utils/feedbacks'
import http from '@/http'

// componentes
import Modal from '@/components/Modal'

// actions
import { removeGame, selectRemovingGame } from '@/app/reducers/games'
import { changeModalDisplay } from '@/app/reducers/app'
import { toast } from 'react-toastify'

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
                    if(toast.isActive(1)) {
                        update(res.data.message)
                    } else {
                        success(res.data.message)
                    }
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
