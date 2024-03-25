// funções
import { useFormContext } from 'react-hook-form'

// componentes
import { StyledDiv, StyledInput } from './styles'

// tipagem dos props
interface InputProps {
    type: string
    id: string
    placeholder?: string
    label: string
    maxLength?: number
}

const Input = ({ type, id, placeholder, label, maxLength }: InputProps) => {
    // constantes utilizadas
    const maxDate = new Date().toISOString().split('T')[0]
    const minDate = '01-01-1900'
    const {
        register,
        formState: { errors },
    } = useFormContext()

    return (
        <StyledDiv>
            <label htmlFor={id}>{label}</label>
            <StyledInput
                type={type}
                id={id}
                autoComplete='off'
                placeholder={placeholder}
                maxLength={maxLength}
                {...register(id, {
                    required: {
                        value: true,
                        message: `O campo ${label.toLowerCase()} é obrigatório.`,
                    },
                    pattern: {
                        value: /^[^\s]+(?:$|.*[^\s]+$)/,
                        message: 'Remova os espaços vazios inválidos.',
                    },
                    min: {
                        value: minDate,
                        message: `A data deve ser posterior a ${minDate}.`,
                    },
                    max: {
                        value: maxDate,
                        message: `A data não pode ultrapassar o dia atual.`,
                    }
                })}
            />
            {errors[id] &&
                (errors[id]?.type === 'required' ||
                    errors[id]?.type === 'pattern' ||
                    errors[id]?.type === 'min' ||
                    errors[id]?.type === 'max') && (
                    <span>{errors[id]?.message?.toString()}</span>
                )}
        </StyledDiv>
    )
}

export default Input
