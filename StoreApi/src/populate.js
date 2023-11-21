import 'dotenv/config' //Permite utilizar variables de entorno
import { connectDB } from './db/connect.js';
import { productModel } from './models/products.models.js';

//import jsonProducts from '../products.json';

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await productModel.deleteMany()
        await productModel.create(  [
            {
              "name": "Robles Duffy",
              "price": 35,
              "feature": true,
              "company": "ikea"
            },
            {
              "name": "Angel Glenn",
              "price": 31,
              "feature": false,
              "company": "liddy"
            },
            {
              "name": "Spence Holcomb",
              "price": 33,
              "feature": false,
              "company": "ikea"
            },
            {
              "name": "Nola Brennan",
              "price": 30,
              "feature": true,
              "company": "caressa"
            },
            {
              "name": "Griffith Henderson",
              "price": 25,
              "feature": false,
              "company": "marcos"
            }
          ])
        console.log('Success!!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()

