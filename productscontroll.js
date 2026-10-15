import { productsData } from "./products.js"

export const productController = (req,res,next)=>{
        res.json(productsData)
}