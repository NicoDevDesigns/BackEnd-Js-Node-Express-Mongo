import {Router} from 'express'
import UserController from '../controllers/user.controller.js'
import { postUsers, deleteUser } from '../controllers/user.controller.js'

const userController = new UserController()
const userRouter = Router()

userRouter.get("/", userController.getUsers)
userRouter.post('/', postUsers)
userRouter.delete('/id', deleteUser)

export default userRouter
