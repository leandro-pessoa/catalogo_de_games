// funções
import { useEffect, useState } from 'react'
import { useAppSelector } from '@/app/hooks'

// componentes
import StyledButton from './styles'

// ícones
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

// states globais
import { selectGames } from '@/app/reducers/games'

const Select = () => {
    // states globais
    const games = useAppSelector(selectGames)

    // states
    const [dropDisplay, setDropDisplay] = useState<boolean>(false)
    const [selectOpts, setSelectOpts] = useState<string[]>([])

    useEffect(() => {
        const categories = games.map((game) => game.category)
        const uniqueCategories = categories.filter(
            (game, index) => categories.indexOf(game) === index,
        )
        setSelectOpts(uniqueCategories)
    }, [games])

    return (
        <StyledButton
            onClick={() => setDropDisplay(!dropDisplay)}
            onBlur={() => setDropDisplay(false)}
        >
            teste
            {dropDisplay ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <ul
                className='select__dropdown'
                style={{ display: dropDisplay ? 'flex' : 'none' }}
            >
                {selectOpts.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
        </StyledButton>
    )
}

export default Select
