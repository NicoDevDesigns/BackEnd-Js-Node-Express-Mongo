import {Router} from 'express'
import UserMongo from '../controllers/user.controller.js'

const userMongo = new UserMongo()
const userRouter = Router()

userRouter.get("/", async(req,res)=>{

    try {
        const users = await userMongo.getUsers()
        if(users){
            res.status(200).send({msg:"Ok", dates: users})
        }else{
            res.status(404).send({msg: "Error",date: users})
        }
    } catch (error) {
        res.status(500).send({ error: "Error interno del servidor" });
    }
})

userRouter.post('/',async (req, res) => {
    const obj = req.body
    //console.log(JSON.stringify(obj))
    try{
        const newUser = await userMongo.postUsers(obj)
        if(newUser){
            res.status(200).send({msg:"Ok", dates: newUser})
        }else{
            res.status(404).send({msg: "Error en userRouter.Post",date: newUser})
        }
    }catch(error){
        res.status(500).send({ error: "Error interno del servidor" });
    }
})
export default userRouter
