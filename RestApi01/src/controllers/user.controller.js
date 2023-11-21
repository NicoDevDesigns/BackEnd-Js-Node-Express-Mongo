import { userModel } from "../models/user.models.js";
import { createHash } from "../utils/bcrypt.js";


export default class UserController{

    getUsers = async (req,res)=>{
        try{
            const users = await userModel.find()
            if(users){
                res.status(200).send({msg:"Ok", dates: users})
            }else{
                res.status(404).send({msg: "Error",date: users})
            }
        }catch (error) {
            res.status(500).send({ error: "Error interno del servidor" });
        }
    }
}

    export const postUsers = async (req, res)=>{
        const {first_name, email, age, password} = req.body
        //const obj = req.body
        //console.log(JSON.stringify(obj))
        try {

            const hashPassword = createHash(password)

            const newUser = await userModel.create({
                first_name: first_name,
                email: email,
                age: age,
                password: hashPassword
            })
            //console.log(JSON.stringify(newUser))
            if(newUser){
                res.status(200).send({msg:"Ok", dates: newUser})
            }else{
                res.status(404).send({msg: "Error en userRouter.Post",date: newUser})
            }
        } catch (error) {
            res.status(500).send({ error: "Error interno del servidor" });
        }
    }

    export const deleteUser = async (req, res) => {
        console.log("Hello nico")
        const { id } = req.params
        console.log("El id es:", id)
        try {
            const user = await userModel.findByIdAndDelete(id)
            if(user){
                res.status(200).send({ resultado: 'Se elimino el carrito', message: user })
              }else{
                 res.status(404).send({ error: `Error! no existe ese usuario`})  
              }
        } catch (error) {
            res.status(500).send({ error: `Error en eliminar usuario ${error}` })
        }
        }