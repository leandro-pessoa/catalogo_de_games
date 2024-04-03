// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface DivProps {
    readonly $display: boolean
}

const overlay = `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 12;
`

const StyledDiv = styled.div<DivProps>`
    position: fixed;
    display: ${(props) => (props.$display ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 12;

    h2 {
        color: ${variables.red};
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }

    .modal__overlay {
        ${overlay}
        backdrop-filter: blur(2px);
    }

    .modal__container {
        background-color: ${(props) => props.theme.colors.backgroundColor};
        padding: 2rem;
        z-index: 13;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        .modal__content {
            margin: 2rem 0;
        }

        .modal__btn-container {
            ${flex('row', 'flex-start', 'center', '2rem')}
            margin-top: 1rem;
        }
    }

    @media (max-width: ${variables.smartphone}) {
        h2 {
            font-size: 1.2rem;
        }
        .modal__container {
            padding: 1.5rem;
            .modal__content {
                font-size: 0.9rem;
            }
        }
    }
`

export { StyledDiv }
