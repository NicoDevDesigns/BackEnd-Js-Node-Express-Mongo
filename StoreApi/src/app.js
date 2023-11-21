import 'dotenv/config' //Permite utilizar variables de entorno
import express from 'express'
import { notFound } from './middleware/not-found.js';
import {errorHandlerMiddlewar} from './middleware/error-handler.js'
import { connectDB } from './db/connect.js';
import routerProducts from './routes/productsRouter.js';
//require('express-async-errors');
import 'express-async-errors';

const app = express() //aplicación principal de Express que configuraremos con rutas y middleware.

//middleware
app.use(express.json())

//routes

app.get('/', (req,res) =>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products', routerProducts)

//products route

app.use(notFound)
app.use(errorHandlerMiddlewar)

const port = process.env.PORT || 4000

const start = async () => {
    try {
        //connectDB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening port ${port}`))
    } catch (error) {
        
    }
}

start()



