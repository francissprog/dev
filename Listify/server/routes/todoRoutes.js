import { Router } from "express";
import { addTask, deleteTask, tasks } from "../controller/taskController.js";

// router init
const router = Router();


// get the task
router.post('/task/add', addTask)
router.get('/task/:id', tasks)
router.delete("/task/:taskIndex/user/:userId", deleteTask)

export default router