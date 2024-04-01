// funções
import { useState } from 'react'
import { useAppDispatch } from '@/app/hooks'
import http from '@/http'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import iconsParams from '@/utils/iconsParams'

// componentes
import Plataforms from '@/components/Plataforms'
import { FormProvider } from 'react-hook-form'
import Input from '@/components/Input'
import Form from '@/components/Form'

// actions e states globais
import { addGame } from '@/app/reducers/games'

// tipagens externas
import { IGame } from '@/interfaces/IGame'
import { success, error } from '@/utils/feedbacks'

// ícones
import { IoIosAdd } from 'react-icons/io'

const AddForm = () => {
    // states globais
    const dispatch = useAppDispatch()

    // states
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [plataforms, setPlataforms] = useState<string[]>([])

    // constantes utilizadas
    const methods = useForm()

    // limpa todos os campos
    const clearAll = () => {
        setPlataforms([])
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

    return (
        <FormProvider {...methods}>
            <Form
                isLoading={isLoading}
                onSubmit={onSubmit}
                submitText='Adicionar'
                title='Adicionar jogo'
                submitIcon={<IoIosAdd {...iconsParams('dark')}/>}
            >
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
                <Plataforms plataforms={plataforms} setPlataforms={setPlataforms}/>
            </Form>
        </FormProvider>
    )
}

export default AddForm
