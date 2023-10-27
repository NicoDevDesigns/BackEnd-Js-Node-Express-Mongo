import express from 'express'

const PORT = 4000
const app = express()

// routes
app.get('/',(req,res) => {
    res.send('Hello NODE API')
})
app.listen(PORT, ()=>{
    console.log('Node API app is running on port 4000')
})