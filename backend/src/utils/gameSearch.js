const gameSearch = (req) => {
    const { name } = req.query
    const query = {}
    if (name) query.name = { $regex: name, $options: 'i' }

    return query
}

export default gameSearch
