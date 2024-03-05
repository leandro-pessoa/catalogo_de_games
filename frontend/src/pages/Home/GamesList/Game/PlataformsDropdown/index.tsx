// funções
import { useState } from 'react'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropup } from 'react-icons/io'

// tipagem dos props
interface PlataformsDropdown {
    plataforms: string[]
}

const PlataformsDropdown = ({ plataforms }: PlataformsDropdown) => {
    // states
    const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(false)

    return (
        <StyledDiv>
            {plataforms.length > 1 ? (
                <button
                    onClick={() => setDropdownDisplay(!dropdownDisplay)}
                    onBlur={() => setDropdownDisplay(false)}
                >
                    Ver mais
                    {dropdownDisplay ? (
                        <IoMdArrowDropup />
                    ) : (
                        <IoMdArrowDropdown />
                    )}
                    <ul style={{ display: dropdownDisplay ? 'flex' : 'none' }}>
                        {plataforms.map((plataform) => (
                            <li key={plataform}>{plataform}</li>
                        ))}
                    </ul>
                </button>
            ) : (
                <span>{plataforms[0]}</span>
            )}
        </StyledDiv>
    )
}

export default PlataformsDropdown
