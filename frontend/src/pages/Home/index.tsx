// componentes
import Container from "@/components/Container"
import GamesList from "./GamesList"
import Filters from "./Filters"

const Home = () => {
    return (
        <Container>
            <Filters />
            <GamesList />
        </Container>
    )
}

export default Home