// funções
import iconsParams from '@/utils/iconsParams'
import { Dispatch, SetStateAction, useState } from 'react'

// componentes
import Button from '@/components/Button'
import PlataformsList from './PlataformsList'
import { StyledInput } from '@/components/Input/styles'
import StyledDiv from './styles'

// ícones
import { IoIosAdd } from 'react-icons/io'

// tipagem dos props
interface PlataformsProps {
    plataforms: string[]
    setPlataforms: Dispatch<SetStateAction<string[]>>
}

const Plataforms = ({ plataforms, setPlataforms }: PlataformsProps) => {
    // states
    const [plataform, setPlataform] = useState<string>('')

    // handle para adicionar as plataformas
    const addHandle = () => {
        if (!plataforms.includes(plataform.trim()) && plataform.trim()) {
            setPlataforms([...plataforms, plataform])
            setPlataform('')
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
                    onChange={(e) => setPlataform(e.target.value)}
                    onKeyDown={(e) => keyboardHandle(e)}
                />
                <Button onClick={() => addHandle()}>
                    <IoIosAdd {...iconsParams('dark')} />
                </Button>
            </div>
            <PlataformsList
                plataforms={plataforms}
                setPlataforms={setPlataforms}
            />
        </StyledDiv>
    )
}

export default Plataforms
