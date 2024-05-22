import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { ProductRoutes } from './app/modules/product/product.routes'

const app: Application = express()
const port = 3000

//Parsers
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/products', ProductRoutes)

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!')
// })

export default app
