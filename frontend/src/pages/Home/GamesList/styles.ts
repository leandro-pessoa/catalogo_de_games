// funções
import styled from 'styled-components'

const StyledTable = styled.table`
    width: 75%;
    

    thead {
        background-color: ${(props) => props.theme.colors.borderColor};

        th {
            padding: 0.7rem 0;
        }
    }
`

export default StyledTable
