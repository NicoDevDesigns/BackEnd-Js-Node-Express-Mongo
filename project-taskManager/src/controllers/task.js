import { taskModel } from "../models/task.models.js"
import {asyncWrapper} from "../middleware/async.js"
import { createCustomError } from "../errors/custom-error.js"


const getAllTask = asyncWrapper( async(req,res) =>{
         const tasks = await taskModel.find({})
        res.status(200).json({tasks})
        //res.status(200).json({tasks,amount: tasks.length})
        //res.status(200).json({status:'success',data: {tasks,nbHits: tasks.length}})
})

const createTask = asyncWrapper(async (req,res) =>{

        const task = await taskModel.create(req.body)
        res.status(201).json({task})

})

const getTask = asyncWrapper(async(req,res,next) =>{

        const {id: taskID} = req.params
        const task = await taskModel.findOne({_id: taskID})
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({task})
    
})

const updateTask = asyncWrapper(async (req,res) =>{

        const {id:taskID} = req.params;
        const task = await taskModel.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
        })
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({task})
        //res.status(200).json({id:taskID, data:req.body})
})

const editTask = async (req,res) =>{
    try{
        const {id:taskID} = req.params;
        const task = await taskModel.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({task})
        //res.status(200).json({id:taskID, data:req.body})
    }catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = asyncWrapper(async (req,res) =>{

        const {id:taskID} = req.params;
        const task = await taskModel.findOneAndDelete({_id:taskID});
        if(!task){
            return next(createCustomError(`No task with id: ${taskID}`,404))
        }
        res.status(200).json({msg:`Delete successful!!: ${task}`})  
        //res.status(200).send()
        //res.status(200).json({task})  
})


export { getAllTask,createTask,getTask,updateTask,deleteTask,editTask };