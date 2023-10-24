import express from 'express'
import tasks from './src/routes/task.route.js'
import { connectDB } from './src/db/connect.js';
import 'dotenv/config'
import { notFound } from './src/middleware/not-found.js';
import {errorHandlerMiddlewar} from './src/middleware/error-handler.js'
const app = express();

const port = process.env.PORT || 4000

//middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddlewar)

//routes
/*app.get('/',(req,res)=>{
    res.send('Hello world, I m Nico')
})
*/


const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()