import express from 'express'
import path from 'path'
import { __dirname } from './path.js'
import { Server } from 'socket.io'

const app = express()
const PORT = process.env.PORT || 4000
const server =app.listen(PORT,()=>
    console.log(`chat server on port ${PORT}`)
)

app.use(express.static(path.join(__dirname, '/public')))

const io = new Server(server)

let socketsConected = new Set()

io.on('connection',onConnected)

function onConnected(socket){
    //console.log(socket.id)
    socketsConected.add(socket.id)

    io.emit('clients-total', socketsConected.size)

    socket.on('disconnect',()=>{
        console.log('Socket disconnected', socket.id)
        socketsConected.delete(socket.id)
        io.emit('clients-total', socketsConected.size)
    }),

    socket.on('message', (data)=>{
        //console.log("recibo en message", data)
        socket.broadcast.emit('chat-message', data)
    })

    socket.on('feedback', (data) =>{
        socket.broadcast.emit('feedback', data)
    })
}