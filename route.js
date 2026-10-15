import express from 'express'
import { productController } from './productscontroll.js'

let route = express.Router()

export const productapiRoute = route.get('/productsdata',productController)