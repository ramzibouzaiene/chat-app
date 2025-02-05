import express, { Application, NextFunction, Request, Response } from 'express'
import { connectMongo } from './configs/mongo.config'
import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io'
import cors from 'cors'
import { handleSocketConnection } from './controllers/socket.controller'
import chatRoutes from './routes/chat.routes'

connectMongo()

const app: Application = express()
const httpServer = createServer(app)

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  })
)

handleSocketConnection(io)

app.use('/api/chat', chatRoutes)

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack)
  res.status(500).send('Something broke')
})

export { httpServer }
