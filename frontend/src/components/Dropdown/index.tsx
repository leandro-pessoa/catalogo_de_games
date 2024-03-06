// funções
import { useState } from 'react'

// componentes
import StyledDiv from './styles'

// ícones
import { IoMdArrowDropdown } from 'react-icons/io'
import { IoMdArrowDropup } from 'react-icons/io'

// tipagem dos props
interface DropdownProps {
    element: string[] | string
}

const Dropdown = ({ element }: DropdownProps) => {
    // states
    const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(false)

    return (
        <StyledDiv>
            {element.length > 1 ? (
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
                    {typeof element === 'string' ? (
                        <ul
                            style={{
                                display: dropdownDisplay ? 'flex' : 'none',
                            }}
                        >
                            <li>{element}</li>
                        </ul>
                    ) : (
                        <ul
                            style={{
                                display: dropdownDisplay ? 'flex' : 'none',
                            }}
                        >
                            {element.map((plataform) => (
                                <li key={plataform}>{plataform}</li>
                            ))}
                        </ul>
                    )}
                </button>
            ) : (
                <span>{element[0]}</span>
            )}
        </StyledDiv>
    )
}

export default Dropdown
