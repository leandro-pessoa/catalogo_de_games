// funções
import iconsParams from '@/utils/iconsParams'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

// componentes
import Button from '@/components/Button'
import PlataformsList from './PlataformsList'
import { StyledInput } from '../Input/styles'
import StyledDiv from './styles'

// ícones
import { IoIosAdd } from 'react-icons/io'

// actions e states globais
import {
    addPlataform,
    selectPlataforms,
    selectPlataform,
    setPlataform,
} from '@/app/reducers/plataform'

const Plataforms = () => {
    // states globais
    const dispatch = useAppDispatch()
    const plataforms = useAppSelector(selectPlataforms)
    const plataform = useAppSelector(selectPlataform)

    // handle para adicionar as plataformas
    const addHandle = () => {
        if (!plataforms.includes(plataform.trim()) && plataform.trim()) {
            dispatch(addPlataform(plataform))
            dispatch(setPlataform(''))
        }
    }

    // handle para adicionar plataforma com o Enter
    const keyboardHandle = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addHandle()
            e.preventDefault()
        }
    }

    return (
        <StyledDiv>
            <label htmlFor='plataforms'>Plataformas</label>
            <div>
                <StyledInput
                    type='text'
                    id='plataforms'
                    autoComplete='off'
                    maxLength={12}
                    placeholder='Uma de cada vez'
                    value={plataform}
                    onChange={(e) => dispatch(setPlataform(e.target.value))}
                    onKeyDown={(e) => keyboardHandle(e)}
                />
                <Button onClick={() => addHandle()}>
                    <IoIosAdd {...iconsParams('dark')} />
                </Button>
            </div>
            <PlataformsList />
        </StyledDiv>
    )
}

export default Plataforms
