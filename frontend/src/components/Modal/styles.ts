// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

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

    .modal__overlay {
        ${overlay}
        backdrop-filter: blur(2px);
    }

    .modal__content {
        background-color: ${(props) => props.theme.colors.backgroundColor};
        padding: 2rem;
        z-index: 13;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        .modal__btn-container {
            ${flex('row', 'flex-start', 'center', '2rem')}
            margin-top: 1rem;
        }
    }
`

export { StyledDiv }
