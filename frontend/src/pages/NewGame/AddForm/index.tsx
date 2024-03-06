// funções
import iconsParams from '@/utils/iconsParams'
import React, { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { v4 as uuidv4 } from 'uuid'

// componentes
import StyledForm from './styles'
import Button from '@/components/Button'
import Plataforms from './Plataforms'

// ícones
import { IoIosAdd } from 'react-icons/io'

// actions e states globais
import {
    removeAllPlataforms,
    setPlataform,
    addGame,
    selectPlataforms,
    selectGames,
} from '@/app/reducers/games'

// tipagens externas
import { IGame } from '@/interfaces/IGame'
import { success, error } from '@/utils/feedbacks'

const AddForm = () => {
    // states globais
    const dispatch = useAppDispatch()
    const plataforms = useAppSelector(selectPlataforms)
    const games = useAppSelector(selectGames)

    // states
    const [name, setName] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const [date, setDate] = useState<string>('')

    // constantes utilizadas
    const maxDate = new Date().toISOString().split('T')[0]

    // url atual
    const { pathname } = useParams()

    // limpa todos os campos
    const cleanAll = () => {
        setName('')
        setCategory('')
        setDate('')
        dispatch(removeAllPlataforms())
        dispatch(setPlataform(''))
    }

    // handle do formulário
    const submitHandle = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const gamesNames = games.map((game) => game.name)

        if (plataforms.length === 0) {
            error('Adicione ao menos uma plataforma.')
            return
        }
        if (gamesNames.includes(name)) {
            error('Esse jogo já foi adicionado.')
            return
        }

        const game: IGame = {
            id: uuidv4(),
            name: name,
            category: category,
            publish: date,
            plataforms: plataforms,
        }
        dispatch(addGame(game))
        success('Novo jogo adicionado!')
        cleanAll()
    }

    useMemo(() => {
        cleanAll()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <StyledForm onSubmit={submitHandle}>
            <div>
                <label htmlFor='name'>Nome</label>
                <input
                    type='text'
                    id='name'
                    autoComplete='off'
                    maxLength={15}
                    placeholder='Digite o nome'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor='category'>Categoria</label>
                <input
                    type='text'
                    id='category'
                    autoComplete='off'
                    maxLength={15}
                    placeholder='Digite a categoria'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
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
                    required
                    min='1900-01-01'
                    max={maxDate}
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
