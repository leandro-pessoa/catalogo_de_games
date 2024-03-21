// funções
import http from '@/app/http'
import { error } from '@/utils/feedbacks'

// tipagens externas
import { IGame } from '@/interfaces/IGame'

const getGames = async () => {
    try {
        const games = await http.get<IGame[]>('/games')
        return games.data
    } catch(err) {
        error('Não foi possível obter os jogos.')
    }
}

export default getGames
