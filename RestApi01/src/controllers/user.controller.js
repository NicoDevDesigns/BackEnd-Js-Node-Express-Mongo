import { userModel } from "../models/user.models.js";

export default class UserMongo{

    getUsers = async ()=>{
        try{
            const users = await userModel.find()
            return users
        }catch(error){
            console.error("error!!!")
        }
    }

    postUsers = async (user)=>{
        try {
            const newUser = await userModel.create(user)
            return newUser
        } catch (error) {
            console.error("error!!!")
        }
    }
}