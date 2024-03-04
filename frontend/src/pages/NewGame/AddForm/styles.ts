// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 1.5rem;
    background-color: ${(props) => props.theme.colors.borderColor};
    width: 65%;
    padding: 2rem 3rem;
    border-left: 6px solid ${variables.red};
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

    div {
        label {
            display: block;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }

        input {
            background-color: ${(props) => props.theme.colors.backgroundColor};
            border: none;
            font-size: 1.1rem;
            color: ${(props) => props.theme.colors.fontColor};
            font-family: ${variables.primaryFont};
            box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1);
            padding: 0.2rem 0.7rem;
            width: 70%;

            &:focus {
                outline: 2px solid ${variables.red};
            }
        }
    }

    .form__plataforms-container {
        grid-column: 1 / 3;

        div {
            ${flex('row', 'auto', 'center', '1rem')}
        }
    }

    .form__btn-container {
        grid-column: 1 / 3;
    }
`

export default StyledForm
