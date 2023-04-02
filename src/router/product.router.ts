import express, { Router, Request, Response } from 'express'

import { conn } from '../model/connection'

const productRouter: Router = express.Router()


productRouter.get('/', (req: Request, res: Response ) => {
  conn.query(
    `SELECT * FROM products`,
    (err, result, fields) => {
      if(err) {
	res.end()
      } else {
	res.render('index', {data: result})
      } 
    }
  )
})

productRouter.get('/products', (req: Request, res: Response ) => {
  conn.query(
  // `SELECT * FROM products WHERE name = '${req.query.name}'`,
  `SELECT * FROM products WHERE name = '${req.query.name}'`,
    (err, result, fields) => {
      if(err) {
	console.log(err)
	console.log(req.query.name)
	console.log(result)
	res.end()
      } else {
	console.log(req.query.name)
	console.log(result)
	res.render('index', {data: result})
      } 
    }
  )
})

export { productRouter }
