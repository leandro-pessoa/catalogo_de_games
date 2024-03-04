// funções
import { useAppSelector } from "@/app/hooks"

// componentes
import StyledUl from "./styles"

// states globais
import { selectPlataforms } from "@/app/reducers/games"

const PlataformsList = () => {
    // states globais
    const plataforms = useAppSelector(selectPlataforms)

    return (
        <StyledUl>
            {
                plataforms.map((plataform) =>
                    <li key={plataform}>{plataform}</li>
                )
            }
        </StyledUl>
    )
}

export default PlataformsList