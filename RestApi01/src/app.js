import 'dotenv/config' //Permite utilizar variables de entorno
import express from 'express'//modulo que simplica la creacion aplic web
import { __dirname } from './path.js'//directorio actual del archivo
import path from 'path'//modulo de node.js para manejar rutas
import mongoose from 'mongoose'
import config from "./config.js";
import router from './routes/main.routes.js'

const PORT = 8080 //numero de puerto
const app = express() //aplicación principal de Express que configuraremos con rutas y middleware.

//Middlewares
app.use(express.json())//permitir el análisis de datos JSON en las solicitudes entrantes
app.use(express.urlencoded({ extended: true })) //URL extensas,permite el análisis de datos codificados en URL en las solicitudes entrantes.

//Conexion a Mongo
mongoose.connect(config.mongoURL)
    .then(async() => {
            console.log("BDD conectada")
        }
    )
    .catch((error) => console.log("Error en conexion con MongoDB ATLAS: ", error))



//Routes
app.use('/static', express.static(path.join(__dirname, '/public')))//se utiliza para servir archivos estáticos desde el directorio 'public'.
app.use('/',router)

//console.log(path.join(__dirname, '/public'))

//Server
app.listen(config.port, () => {
    console.log(`Server on port ${PORT}`)
})