// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto;
    row-gap: 1.5rem;
    background-color: ${(props) => props.theme.colors.borderColor};
    width: 65%;
    padding: 2rem 3rem;
    border-left: 6px solid ${variables.red};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;

    label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }

    .form__btn-container {
        grid-column: 1 / 3;
    }

    ::-webkit-calendar-picker-indicator {
        filter: ${(props) => props.theme.colors.calendarPicker};
    }

    @media (max-width: ${variables.notebook}) {
        width: 75%;
    }

    @media (max-width: ${variables.tablet}) {
        width: 80%;

        label {
            font-size: 1.1rem;
        }
    }
    @media (max-width: ${variables.smartphone}) {
        ${flex('column', 'center', 'stretch', '1.5rem')}
        margin-bottom: 4rem;
        width: 70%;

        label {
            font-size: 1rem;
        }
    }
`

export default StyledForm
