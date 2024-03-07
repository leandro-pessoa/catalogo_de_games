// componentes
import Modal from "@/components/Modal"

const Delete = () => {

    const deleteHandle = () => {

    }

    return (
        <Modal action={() => deleteHandle()} title="Excluir jogo">
            <p>Tem certeza que deseja excluir o jogo?</p>
        </Modal>
    )
}

export default Delete