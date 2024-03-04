// funções
import iconsParams from '@/utils/iconsParams'

// componentes
import React from 'react'
import StyledForm from './styles'

// ícones
import { IoIosAdd } from 'react-icons/io'

const AddForm = () => {

    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <StyledForm onSubmit={submitHandle}>
            <div>
                <label htmlFor='name'>Nome</label>
                <input type='text' id='name' autoComplete='off' />
            </div>
            <div>
                <label htmlFor='category'>Categoria</label>
                <input type='text' id='category' autoComplete='off' />
            </div>
            <div>
                <label htmlFor='publish'>Data de lançamento</label>
                <input type='date' id='publish' autoComplete='off' />
            </div>
            <div>
                <label htmlFor='plataforms'>Plataformas</label>
                <input type='text' id='plataforms' autoComplete='off' />
            </div>
            <button type='submit'>
                <IoIosAdd {...iconsParams('dark')}/>
                Adicionar
            </button>
        </StyledForm>
    )
}

export default AddForm
