// funções
import styled from 'styled-components'

const StyledTr = styled.tr`
    td {
        border-top: 2px solid red;
        border-bottom: 2px solid ${(props) => props.theme.colors.borderColor};
        padding: 1rem 0;
        text-align: center;

        :first-child {
            border-top: none;
        }
    }
`

export default StyledTr
