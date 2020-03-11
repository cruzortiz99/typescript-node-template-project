import express, { Request, Response } from 'express'

const APP = express()
const PORT = process.env.PORT || 5000

APP.get('/', (request: Request, response: Response) => {
    response.setHeader('Content-Type', 'text/html')
    response.send('<h1>Hola mundo!</h1>')
})

APP.listen(PORT, () => {
    console.table([
        {
            host: 'localhost',
            port: PORT
        }
    ])
})
