import { httpServer } from './app'
import { config } from './configs/dotenv.config'

const PORT = config.port || 5000

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
