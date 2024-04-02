import mongoose from 'mongoose'

// realiza a conexão com o banco de dados
const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING)
        return mongoose.connection
    } catch (err) {
        console.log(err)
    }
}

export default connectDatabase