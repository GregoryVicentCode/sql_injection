import express, { Express, Request, Response } from 'express'
import morgan from 'morgan'

import { productRouter } from './router/product.router'

const app: Express = express()
const viewsPath: string = __dirname.replace('dist', '/public/views')

app.set('views', viewsPath)
app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(express.static('../public'))

app.use('/', productRouter)

app.listen(8000, () => {
  console.log('-------------- Server running on Port 8000')
})
