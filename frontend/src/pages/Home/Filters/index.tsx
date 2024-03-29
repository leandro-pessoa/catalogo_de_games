// componentes
import Search from './Search'
import StyledDiv from './styles'
import ShowAll from './ShowAll'
import Categories from '@/pages/Home/Filters/Categories'

const Filters = () => {
    return (
        <StyledDiv>
            <Search />
            <Categories />
            <div className='show-all'>
                <ShowAll />
            </div>
        </StyledDiv>
    )
}

export default Filters
