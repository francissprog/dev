import errorMessage from "../utils/errorMessage";
import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";

export const handleLogin = async(form,router,  setLoading) => {
    try {
        const res = await axios.post("http://localhost:8080/api/auth", form);

        if (res.status === 200) {

            // set the cookies
            Cookies.set("token", res.data.token);
            Cookies.set("username", res.data.userCredentials.username);
            Cookies.set("id", res.data.userCredentials.id);
            
            // return a alert
            return Swal.fire({
                title: res.data.message,
                icon: "success",
                confirmButtonText: "Go to Dashboard",
                allowOutsideClick: false,
                showConfirmButton: true,
                showCancelButton: false,
                customClass: {
                    confirmButton: "custom-confirm-btn",
                    cancelButton: "custom-cancel-btn",
                }
            }).then(result => {
                if (result.isConfirmed) return router.replace("/dashboard"); 
            })
        }

    } catch (error) {
        console.error(error);

        if (error.response && error.response.status) {
            if (error.response.status === 400)
                return errorMessage(error.response.data.error, "question", setLoading);
            if (error.response.status === 404)
                return errorMessage(error.response.data.error, "warning", setLoading);
            if (error.response.status === 401)
                return errorMessage(error.response.data.error, "warning", setLoading);
        }

        // for network responses
        if(error.request){
            return errorMessage("Check your Network", "error", setLoading)
        }
    } finally {
        setLoading(false);
    }
}

export const handleRegister = async(form,router,setLoading) => {

    try {
        const res = await axios.post("http://localhost:8080/api/auth/register",form );
        
        // response validation
        if (res.status === 200) {
            
             // return a alert
             Swal.fire({
                title: res.data.message,
                icon: "success",
                allowOutsideClick: false,
                showConfirmButton: true,
                showCancelButton:  true,
                confirmButtonText: "Go to Dashboard?",
                cancelButtonText: "Go to Login",
                customClass: {
                    confirmButton: "custom-confirm-btn",
                    cancelButton: "custom-cancel-btn",
                }
            }).then(result => {
                if (result.isConfirmed) {
                    // set the Cookies
                    Cookies.set("token", res.data.token);
                    Cookies.set("username", res.data.userCredentials.username);
                    Cookies.set("id", res.data.userCredentials.id);

                    return router.replace("/dashboard");
                }
                else return router.replace("/auth") ;
            })
        }
    } catch (error) {
        // error response
        if (error.response) {
            if (error.response.status === 400) {
                return errorMessage(error.response.data.error, "question", setLoading);             
            } 
            if (error.response.status === 403) {
                return errorMessage(error.response.data.error, "question", setLoading);             
            }
            if (error.response.status === 403) {
                return errorMessage(error.response.data.error, "question", setLoading);             
            }       
        }
        
    }
    finally{
        setLoading(false)
    }
}