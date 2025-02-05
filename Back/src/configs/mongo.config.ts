import mongoose from 'mongoose'
import { config } from './dotenv.config'

export const connectMongo = async () => {
  try {
    await mongoose.connect(config.mongoURI)
    console.log('MongoDB connected')
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}
