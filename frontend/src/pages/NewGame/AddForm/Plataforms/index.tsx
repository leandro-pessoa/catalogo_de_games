// funções
import iconsParams from '@/utils/iconsParams'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useState } from 'react'

// componentes
import Button from "@/components/Button"
import PlataformsList from './PlataformsList'

// ícones
import { IoIosAdd } from 'react-icons/io'

// actions e states globais
import { addPlataform, selectPlataforms } from '@/app/reducers/games'

const Plataforms = () => {
    // states globais
    const dispatch = useAppDispatch()
    const plataforms = useAppSelector(selectPlataforms)

    // states 
    const [plataform, setPlataform] = useState<string>('')

    // handle para adicionar plataforma
    const addHandle = () => {
        if(!plataforms.includes(plataform)) {
            dispatch(addPlataform(plataform))
            setPlataform('')
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
                    maxLength={20}
                    placeholder='Digite as plataformas (uma de cada vez)'
                    value={plataform}
                    onChange={(e) => setPlataform(e.target.value)}
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