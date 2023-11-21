import 'dotenv/config'
import bcrypt from 'bcrypt'

//Encriptar contraseña
export const createHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(parseInt(process.env.SALT)))