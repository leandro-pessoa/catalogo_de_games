import mongoose from 'mongoose'

const connectDatabase = async () => {
    try {
        mongoose.connect(process.env.DB_CONNECTION_STRING)
        return mongoose.connection
    } catch (err) {
        console.log(err)
    }
    
}

export default connectDatabase