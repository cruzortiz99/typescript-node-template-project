import express, { Request, Response } from 'express'

const APP = express()
const PORT = +(process.env.PORT || 5000)
const HOST = process.env.HOST || 'localhost'

APP.use('/', (request: Request, response: Response) => {
    response.end('<h1>Hola Mundo!</h1>')
})

APP.use((request: Request, response: Response) => {
    response.end('<h1>Not Found</h1>')
})

APP.listen(PORT, HOST, () => {
    console.log(`Running on: ${HOST}:${PORT}/`)
})
