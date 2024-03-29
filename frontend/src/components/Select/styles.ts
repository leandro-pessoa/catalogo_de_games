// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

const StyledButton = styled.button`
    ${flex('row', 'space-between', 'center')}
    position: relative;
    background-color: ${(props) => props.theme.colors.fontColor};
    color: ${(props) => props.theme.colors.backgroundColor};
    padding: 0.2rem 0.7rem;
    border: none;
    font-size: 1rem;
    width: 200px;
    font-family: ${variables.primaryFont};

    &:hover {
        cursor: pointer;
    }

    .select__dropdown {
        ${flex('column', 'auto', 'auto', '.6rem')}
        position: absolute;
        top: 100%;
        right: 0px;
        width: 100%;
        background-color: ${variables.red};
        color: ${variables.white};
        z-index: 15;
        padding: 0.5rem 0;
        padding-bottom: 0;
        font-size: 1.1rem;
        max-height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

        li {
            ${flex('row', 'flex-start', 'center')}
            border-bottom: 1px solid ${(props) =>
                props.theme.colors.backgroundColor};
            width: 100%;
            padding-bottom: 0.5rem;
            padding-left: 0.8rem;
            font-size: 0.9rem;

            &:last-child {
                border-bottom: none;
            }
        }
    }

    ::-webkit-scrollbar-track {
        background-color: ${variables.red};
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${variables.white};
    }

    @media (max-width: ${variables.smartphone}) {
        width: 190px;
        font-size: 0.9rem;
    }
    @media (max-width: ${variables.smallSmartphone}) {
        font-size: 0.7rem;
        width: 160px;

        .select__dropdown {
            li {
                font-size: 0.7rem;
            }
        }
    }
`

export default StyledButton
