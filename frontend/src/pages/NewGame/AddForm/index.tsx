// funções
import iconsParams from '@/utils/iconsParams'
import React, { useState } from 'react'

// componentes
import StyledForm from './styles'
import Button from '@/components/Button'
import Plataforms from './Plataforms'

// ícones
import { IoIosAdd } from 'react-icons/io'

const AddForm = () => {
    // states
    const [name, setName] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [date, setDate] = useState<string>('')

    // handle do formulário
    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <StyledForm onSubmit={submitHandle}>
            <div>
                <label htmlFor='name'>Nome</label>
                <input
                    type='text'
                    id='name'
                    autoComplete='off'
                    maxLength={20}
                    placeholder='Digite o nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='category'>Categoria</label>
                <input
                    type='text'
                    id='category'
                    autoComplete='off'
                    maxLength={20}
                    placeholder='Digite a categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor='publish'>Data de lançamento</label>
                <input
                    type='date'
                    id='publish'
                    autoComplete='off'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <Plataforms />
            <div className='form__btn-container'>
                <Button type='submit'>
                    <IoIosAdd {...iconsParams('dark')} />
                    Adicionar
                </Button>
            </div>
        </StyledForm>
    )
}

export default AddForm
