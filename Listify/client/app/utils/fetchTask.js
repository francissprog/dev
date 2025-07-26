// utils/fetchTask.js
import axios from "axios";

export const fetchTask = async(id, setTodo) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/task/${id}`);
        if(res.status === 200) {
          
          setTodo(res.data.userTask);
        }
    } catch (error) {
        console.error(error);

        if (error.response) {
          if (error.response.status === 400) 
            return console.error(error.response.data.error);
          if (error.response.status === 404) 
            return console.error(error.response.data.error);
        } 
    }
}
