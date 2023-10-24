import mongoose from 'mongoose'

//const connectionString = 'mongodb+srv://nico:1234@cluster0.iwxgugq.mongodb.net/?retryWrites=true&w=majority'

const connectDB = (url) =>{
   return  mongoose.connect(url)
}

//mongoose.connect(connectionString).then(()=>console.log('CONNECTED TO THE DB...')).catch((err)=>console.log(err))

export{connectDB}