import { Router } from "express";
import userRouter from "./user.routes.js";
/*
import cartRouter from './cartController.routes.js'
import productRouter from "./productsController.routes.js";
import sessionRouter from "./sessions.routes.js";
import userRouter from "./userController.routes.js";
import routerTicket from "./tickets.routes.js";
*/
const router = Router()


router.use('/api/users', userRouter)

/*
router.use('/api/product', productRouter)
router.use('/api/carts', cartRouter)
router.use('/api/sessions', sessionRouter)
router.use('/api/tickets', routerTicket)
*/
export default router