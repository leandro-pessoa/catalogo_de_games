// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

// tipagem dos props
interface DivProps {
    readonly $display: boolean
}

const StyledDiv = styled.div<DivProps>`
    ${flex('row', 'auto', 'auto')}

    main {
        width: ${(props) => props.$display ? '80%' : '100%'};
    }
`

export default StyledDiv
