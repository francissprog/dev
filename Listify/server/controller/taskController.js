import User from "../models/User.js";
import mongoose from "mongoose";
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);


export const addTask = async(req, res) => {
    const {title, id} = req.body;

    // form validation
    if (!title) return res.status(400).json({error: "Doesn't have task"});

    try {
        // find the user by id
        const user = await User.findById(id);

        // if the user not found
        if (!user) {
            return res.status(404).json({error: "User not found"});
        } 

        // push the task
        user.todos.push({title});

        // save the user
        await user.save();

        // return a success message
        return res.status(200).json({message: "Task Successfully Added"});
    } catch (error) {
        // log the error
        console.log(error);

        // send a response to client 
        return res.status(500).json({error: "Internal Server Error"})
    }
}


export const tasks = async(req, res) => {
    const { id } = req.params;

    try {
        // id validation
        if (!id) return res.status(400).json({ error: "Params not received" });

        // find user by id
        const user = await User.findById(id);

        // user db validation
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // create a userTask and map it
        const userTask = user.todos.map(todo => ({
            task: todo.title,
            done: todo.completed,
            id: todo._id
        }));

        // reponse to client the userTask
        return res.status(200).json({ userTask });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const deleteTask = async (req, res) => {
  const { userId, taskIndex } = req.params;

  if(!userId || !taskIndex) return res.status(400).json({error: "Bad Request"});
  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    if (taskIndex < 0 || taskIndex >= user.todos.length) {
      return res.status(400).json({ error: "Invalid task index" });
    }

    user.todos.splice(taskIndex, 1);
    await user.save();

    return res.status(200).json({ message: "Task successfully deleted" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
