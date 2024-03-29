// funções
import { useState, ReactNode } from 'react'

// componentes
import StyledButton from './styles'

// ícones
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

// tipagem dos props
interface SelectProps {
    children: ReactNode | string | ReactNode[] | (string | ReactNode)[]
    selectedOpt: string
}

const Select = ({ children, selectedOpt }: SelectProps) => {
    // states
    const [dropDisplay, setDropDisplay] = useState<boolean>(false)

    return (
        <StyledButton
            onClick={() => setDropDisplay(!dropDisplay)}
            onBlur={() => setDropDisplay(false)}
        >
            {selectedOpt}
            {dropDisplay ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <ul
                className='select__dropdown'
                style={{ display: dropDisplay ? 'flex' : 'none' }}
            >
                {children}
            </ul>
        </StyledButton>
    )
}

export default Select
