// funções
import styled from 'styled-components'

// variáveis
import { variables, flex } from '@/variables'

const StyledDiv = styled.div`
    ${flex('row', 'center')}

    button {
        ${flex('row', 'center', 'center')}
        background-color: transparent;
        border: none;
        font-family: ${variables.primaryFont};
        color: ${(props) => props.theme.colors.fontColor};
        position: relative;

        &:hover {
            cursor: pointer;
        }

        ul {
            ${flex('column', 'auto', 'center')}
            position: absolute;
            top: 110%;
            background-color: ${(props) => props.theme.colors.borderColor};
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
            border: 1px solid ${variables.red};
            z-index: 10;
            cursor: auto;
            padding: 0 0.4rem;
            max-height: 150px;
            overflow-y: auto;

            li {
                padding: 0.5rem 0;
                border-bottom: 1px solid
                    ${(props) => props.theme.colors.backgroundColor};
                width: 100%;

                &:last-child {
                    border-bottom: none;
                }
            }
        }
    }
`

export default StyledDiv
