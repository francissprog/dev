// services/todoService.js
import Swal from "sweetalert2";
import errorMessage from "../utils/errorMessage";
import axios from "axios";

// Function to add Task
export const handleAddTask = async (task, setLoading, refreshTasks) => {
    try {
        // Post the data to server
        const res = await axios.post("http://localhost:8080/api/task/add", task);

        // Success response
        if (res.status === 200) {
            Swal.fire({
                title: "Task Added successfully",
                icon: "success",
                showCancelButton: false,
                showConfirmButton: false,
                position: "top-right",
                timer: 1200, 
            });

            // Refresh the task list
            refreshTasks();
        }
    } catch (error) {
        // Log the error
        console.error(error);

        // Error response
        if (error.response && error.response.status) {
            if (error.response.status === 400)
                return errorMessage(error.response.data.error, "question", setLoading);
            if (error.response.status === 404)
                return errorMessage(error.response.data.error, "warning", setLoading);
        }

        // For network responses
        if (error.request) {
            return errorMessage("Check your Network", "error", setLoading);
        }
    } finally {
        setLoading(false);
    }
};

// Function to delete Task
export const handleDeleteTask = async (taskIndex, userId, refreshTasks, setLoading) => {

    try {
        const res = await axios.delete(`http://localhost:8080/api/task/${taskIndex}/user/${userId}`);

        if (res.status === 200) {
            Swal.fire({
                title: "Task Deleted successfully",
                icon: "success",
                showCancelButton: false,
                showConfirmButton: false,
                position: "top-right",
                timer: 1000, 
                allowOutsideClick: false
            });

            // Refresh the task list
            refreshTasks();
        }
    } catch (error) {
        console.error(error);

        if (error.response && error.response.status) {
            if (error.response.status === 404)
                return errorMessage(error.response.data.error, "warning", setLoading) 
            if (error.response.status === 400)
                return errorMessage(error.response.data.error, "warning", setLoading);
        }
        if (error.request) {
            return errorMessage("Check your Network", "error", setLoading);
        }
    }
};