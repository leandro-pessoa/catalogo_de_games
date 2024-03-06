// funções
import { useAppSelector } from "@/app/hooks"

// componentes
import Delete from "@/pages/Home/GamesList/Game/Actions/Delete"

// states globais
import { selectModalType } from "@/app/reducers/app"

const RenderModal = () => {
    // states globais
    const modalType = useAppSelector(selectModalType)

    return <>{modalType === 'delete' && <Delete />}</>
}

export default RenderModal