// funções
import iconsParams from '@/utils/iconsParams'
import { useAppDispatch, useAppSelector } from '@/app/hooks'

// componentes
import Button from '@/components/Button'
import PlataformsList from './PlataformsList'

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
        if (!plataforms.includes(plataform) && plataform) {
            dispatch(addPlataform(plataform))
            dispatch(setPlataform(''))
        }
    }

    return (
        <div className='form__plataforms-container'>
            <label htmlFor='plataforms'>Plataformas</label>
            <div>
                <input
                    type='text'
                    id='plataforms'
                    autoComplete='off'
                    maxLength={12}
                    placeholder='Uma de cada vez'
                    value={plataform}
                    onChange={(e) => dispatch(setPlataform(e.target.value))}
                />
                <Button onClick={() => addHandle()}>
                    <IoIosAdd {...iconsParams('dark')} />
                </Button>
            </div>
            <PlataformsList />
        </div>
    )
}

export default Plataforms
