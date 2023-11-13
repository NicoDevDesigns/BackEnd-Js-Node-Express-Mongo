import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import { productModel } from './models/productModel.js'

const PORT = 4000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true })) //URL extensas
// routes
app.get('/',(req,res) => {
    res.send('Hello NODE API')
})
app.get('/blog',(req,res) => {
    res.send('Hello world, I am Nico!')
})
app.get('/products', async(req,res)=>{
    try {
        const products = await productModel.find({})
        res.status(200).json({products})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})
app.get('/products/:id', async(req,res)=>{
        try {
            const {id} = req.params;    
            const product = await productModel.findById(id)
            res.status(200).json({product})
    } catch (error) {
        res.status(500).send({message:error.message})
    }
})
app.post('/product',async(req,res)=>{
    //console.log(req.body)
    //res.send(req.body)
    try {
        const product = await productModel.create(req.body)
        res.status(200).json({product})
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})        
    }
})
app.put('/products/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await productModel.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updateProduct = await productModel.findById(id) 
        res.status(200).json(updateProduct)
    } catch (error) {
        res.status(500).send({message:error.message})        
    }
})

app.delete('/products/:id', async(req,res)=>{
    try {
        const {id} = req.params
        const product = await productModel.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product)

    } catch (error) {
        res.status(500).send({message:error.message})  
    }
})



mongoose.
connect(process.env.MONGO_URL).
then(()=>{
    console.log('connected to MongoDB')
    app.listen(PORT, ()=>{
    console.log('Node API app is running on port 4000')
})
}).catch((error)=>{
    console.log(error)
})