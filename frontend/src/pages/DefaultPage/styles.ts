// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface DivProps {
    readonly $display: boolean
}

const StyledDiv = styled.div<DivProps>`
    ${flex('row', 'auto', 'auto')}

    main {
        width: ${(props) => (props.$display ? '80%' : '100%')};
    }

    @media (max-width: ${variables.tablet}) {
        main {
            width: 100%;
        }
    }
`

export default StyledDiv
