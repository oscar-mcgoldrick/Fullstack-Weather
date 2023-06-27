import express from 'express'
import path from 'path'
import citiesRoutes from './routes/cities'
import cityRoutes from './routes/city'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cities', citiesRoutes)
server.use('/api/v1/city', cityRoutes)

export default server
