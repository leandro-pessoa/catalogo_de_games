
// pega os valores de busca lançados 
// processa eles com o regex
// e retorna um objeto com os dados tratados
const gameSearch = (req) => {
    const { name, category } = req.query
    const query = {}
    if (name) query.name = { $regex: name, $options: 'i' }
    if(category) query.category = category

    return query
}

export default gameSearch
