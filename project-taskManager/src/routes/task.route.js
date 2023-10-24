import express from 'express'
import { getAllTask,createTask,getTask,updateTask,deleteTask,editTask } from '../controllers/task.js';

const router = express.Router();
/*
router.route('/').get((req,res)=>{
    res.send('all items')
})
*/
router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask)
//module.exports=router
export default router