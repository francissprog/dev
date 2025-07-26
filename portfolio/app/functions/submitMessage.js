import Swal from "sweetalert2";
import errorMessage from "./errorMessage";
import axios from "axios";


const submitMessage = async(userData ,setLoading ) => {
  try {
    // fetch the data
    const res = await axios.post("api/send/message", userData);
    console.log(userData);

    // response status
    if (res.status === 200) {
      // response data
      const data = res.data;
      console.log(data);
      // success alert
      Swal.fire({
        title: "Successflly Send the message",
        showCancelButton :false,
        showConfirmButton: false,
        icon: "success",
        timer: 1200,
      })
      setTimeout(() => {
        setLoading(false)
      }, 1200)
    }
  } catch (error) {
    // log the error
    if (error.response) {
      if (error.response.status === 400) {
        return errorMessage("Bad Request", setLoading, "warning")
      }
    }
    console.log(error);
  }
}

export default submitMessage