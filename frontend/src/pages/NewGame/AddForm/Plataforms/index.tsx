// funções
import iconsParams from '@/utils/iconsParams'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import React, { useState } from 'react'

// componentes
import Button from '@/components/Button'
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

    const add = () => {
        if (!plataforms.includes(plataform) && plataform) {
            dispatch(addPlataform(plataform))
            setPlataform('')
        }
    }

    // handle para adicionar plataforma com o enter
    const keyHandle = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            add()
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
                    onKeyDown={(e) => keyHandle(e)}
                />
                <Button onClick={() => add()}>
                    <IoIosAdd {...iconsParams('dark')} />
                </Button>
            </div>
            <PlataformsList />
        </div>
    )
}

export default Plataforms
