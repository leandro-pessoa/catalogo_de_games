const gameSearch = (req) => {
    const { name, category } = req.query
    const query = {}
    if (name) query.name = { $regex: name, $options: 'i' }
    if(category) query.category = { $regex: category, $options: 'i'}

    return query
}

export default gameSearch
