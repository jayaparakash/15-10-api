import express from 'express'
import cors from 'cors'
import { productapiRoute } from './route.js'

let app = express()
let port = 555

app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1>Welcome to products page<h2/>')
})

app.use('/api',productapiRoute)

app.listen(port,()=>{
    console.log(`U r server is running at port number ${port}`);
})

