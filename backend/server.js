import 'dotenv/config'
import app from './src/app.js'

const PORT = process.env.PORT || 3000

// listen do servidor
app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`))
