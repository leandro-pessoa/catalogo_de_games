// funções
import styled from 'styled-components'

// variáveis
import { flex, variables } from '@/variables'

// tipagem dos props
interface StyledSectionProps {
    readonly $verticalAlign: boolean
}

const StyledSection = styled.section<StyledSectionProps>`
    ${flex('column', 'center', 'center', '1rem')}
    height: calc(100% - 96px); /* altura do header (96px) */

    @media (max-width: ${variables.smartphone}) {
        height: ${(props) => props.$verticalAlign ? 'calc(100vh - 148px)' : 'auto'};
    }
`

export default StyledSection
