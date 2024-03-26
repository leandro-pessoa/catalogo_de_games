// funções
import iconsParams from '@/utils/iconsParams'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import http from '@/http'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'

// componentes
import StyledForm from './styles'
import Button from '@/components/Button'
import Plataforms from './Plataforms'
import { FormProvider } from 'react-hook-form'
import Input from './Input'
import Loading from '@/components/Loading'

// ícones
import { IoIosAdd } from 'react-icons/io'

// actions e states globais
import {
    removeAllPlataforms,
    setPlataform,
    selectPlataforms,
} from '@/app/reducers/plataform'
import { addGame } from '@/app/reducers/games'

// tipagens externas
import { IGame } from '@/interfaces/IGame'
import { success, error } from '@/utils/feedbacks'

const AddForm = () => {
    // states globais
    const dispatch = useAppDispatch()
    const plataforms = useAppSelector(selectPlataforms)

    // states
    const [isLoading, setIsLoading] = useState<boolean>(false)

    // constantes utilizadas
    const methods = useForm()

    // url atual
    const { pathname } = useParams()

    // limpa todos os campos
    const clearAll = () => {
        dispatch(removeAllPlataforms())
        dispatch(setPlataform(''))
        methods.reset()
    }

    const onSubmit = methods.handleSubmit((data) => {
        if (plataforms.length === 0) {
            error('Adicione ao menos uma plataforma.')
            return
        }

        const game: IGame = {
            id: uuidv4(),
            name: data.name,
            category: data.category,
            publish: data.date,
            plataforms: plataforms,
        }

        setIsLoading(true)

        http.post('/games', { ...game })
            .then((res) => {
                dispatch(addGame(res.data.game))
                success(res.data.message)
                clearAll()
            })
            .catch((err) => {
                if (err.response) {
                    error(err.response.data.message)
                } else {
                    error('Não foi possível a conexão com o servidor.')
                }
            })
            .finally(() => setIsLoading(false))
    })

    useMemo(() => {
        clearAll()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <FormProvider {...methods}>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
                <Input
                    type='text'
                    id='name'
                    placeholder='Digite o nome'
                    label='Nome'
                    maxLength={15}
                />
                <Input
                    type='text'
                    id='category'
                    placeholder='Digite a categoria'
                    label='Categoria'
                    maxLength={15}
                />
                <Input type='date' id='date' label='Lançamento' />
                <Plataforms />
                <div className='form__btn-container'>
                    <Button onClick={onSubmit}>
                        <IoIosAdd {...iconsParams('dark')} />
                        Adicionar
                    </Button>
                </div>
            </StyledForm>
            {isLoading && <Loading overlay={true} />}
        </FormProvider>
    )
}

export default AddForm
