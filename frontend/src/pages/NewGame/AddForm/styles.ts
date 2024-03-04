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

            button {
                padding: 0.17rem 0.8rem;
            }
        }
    }

    .form__btn-container {
        grid-column: 1 / 3;
    }

    ::-webkit-calendar-picker-indicator {
        filter: ${(props) => props.theme.colors.calendarPicker};
    }

    @media (max-width: ${variables.notebook}) {
        div {
            input {
                width: 80%;
            }
        }
    }
    @media (max-width: ${variables.tablet}) {
        width: 80%;
    }
    @media (max-width: ${variables.smartphone}) {
        ${flex('column', 'center', 'stretch', '1.5rem')}
        margin-bottom: 4rem;
        width: 70%;

        div {
            label {
                font-size: 1rem;
            }
            input {
                width: calc(100% - 1.4rem) /* padding interno */;
                font-size: 1rem;
            }
        }

        .form__plataforms-container {
            div {
                ${flex('column', 'auto', 'flex-start', '1rem')}
                position: relative;

                button {
                    position: absolute;
                    right: 0;
                }
            }
        }
    }
`

export default StyledForm
