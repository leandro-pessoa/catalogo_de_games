// funções
import { useForm } from 'react-hook-form'
import { useAppSelector, useAppDispatch } from '@/app/hooks'
import iconsParams from '@/utils/iconsParams'
import { useState } from 'react'
import http from '@/http'
import { useNavigate } from 'react-router-dom'

// componentes
import Form from '@/components/Form'
import { FormProvider } from 'react-hook-form'
import Plataforms from '@/components/Plataforms'
import Input from '@/components/Input'

// states globais e actions
import {
    editGame,
    selectEditingGame,
    setEditingGame,
} from '@/app/reducers/games'

// ícones
import { MdEdit } from 'react-icons/md'
import { error, success } from '@/utils/feedbacks'

// tipagens externas
import { IGame } from '@/interfaces/IGame'

const EditForm = () => {
    // states globais
    const editingGame = useAppSelector(selectEditingGame)
    const dispatch = useAppDispatch()

    // states
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [plataforms, setPlataforms] = useState<string[]>(
        editingGame ? editingGame.plataforms : [],
    )

    // hook useForm
    const methods = useForm()

    // limpa todos os campos
    const clearAll = () => {
        methods.reset()
        setPlataforms([])
    }

    // função de navegação
    const navigate = useNavigate()

    // handle para o submit
    const onSubmit = methods.handleSubmit((data) => {
        if (plataforms.length === 0) {
            error('Adcione ao menos uma plataforma.')
            return
        }

        if (editingGame) {
            const game: IGame = {
                id: editingGame.id,
                _id: editingGame._id,
                name: data.name,
                category: data.category,
                publish: data.date,
                plataforms: plataforms,
            }

            setIsLoading(true)
            http.put(`/games/${editingGame._id}`, { ...game })
                .then((res) => {
                    dispatch(editGame(game))
                    success(res.data.message)
                    clearAll()
                    dispatch(setEditingGame(undefined))
                    navigate('/')
                    methods.reset()
                })
                .catch((err) => {
                    if (err.response) {
                        error(err.response.data.message)
                    } else {
                        error('Não foi possível a conexão com o servidor.')
                    }
                })
                .finally(() => setIsLoading(false))
        }
    })

    return (
        <FormProvider {...methods}>
            <Form
                onSubmit={onSubmit}
                submitText='Editar'
                isLoading={isLoading}
                title='Editar jogo'
                submitIcon={<MdEdit {...iconsParams('dark')} size={20} />}
            >
                <Input
                    type='text'
                    id='name'
                    placeholder='Digite o nome'
                    label='Nome'
                    maxLength={15}
                    value={editingGame?.name}
                />
                <Input
                    type='text'
                    id='category'
                    placeholder='Digite a categoria'
                    label='Categoria'
                    maxLength={15}
                    value={editingGame?.category}
                />
                <Input
                    type='date'
                    id='date'
                    label='Lançamento'
                    value={editingGame?.publish.substring(0, 10)}
                />
                <Plataforms
                    plataforms={plataforms}
                    setPlataforms={setPlataforms}
                />
            </Form>
        </FormProvider>
    )
}

export default EditForm
