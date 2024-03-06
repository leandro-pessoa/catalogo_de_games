// funções
import styled from 'styled-components'

// variáveis
import { flex } from '@/variables'

const StyledSection = styled.section`
    ${flex('column', 'center', 'center', '1rem')}
    height: calc(100% - 96px); /* altura do header (96px) */
`

export default StyledSection
