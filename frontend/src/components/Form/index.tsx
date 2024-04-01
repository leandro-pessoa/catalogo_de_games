// funções
import React from 'react'

// componentes
import StyledForm from './styles'
import Button from '../Button'
import Loading from '../Loading'
import Title from '../Title'

// tipagem dos props
interface FormProps {
    onSubmit: () => void
    submitText: string
    children:
        | React.ReactElement
        | React.ReactElement[]
        | string
        | (React.ReactElement | string)[]
    isLoading: boolean
    title: string
    submitIcon: React.ReactElement
}

const Form = ({ onSubmit, submitText, children, isLoading, title, submitIcon }: FormProps) => {
    return (
        <>  
            <Title>{title}</Title>
            <StyledForm onSubmit={(e) => e.preventDefault()}>
                {children}
                <div className='form__btn-container'>
                    <Button onClick={onSubmit}>
                        {submitIcon}
                        {submitText}
                    </Button>
                </div>
                {isLoading && <Loading overlay={true} />}
            </StyledForm>
        </>
    )
}

export default Form
