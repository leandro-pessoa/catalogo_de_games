// componentes
import Search from './Search'
import StyledDiv from './styles'
import ShowAll from './ShowAll'
import Select from '@/pages/Home/Filters/Select'

const Filters = () => {
    return (
        <StyledDiv>
            <Search />
            <Select />
            <ShowAll />
        </StyledDiv>
    )
}

export default Filters
