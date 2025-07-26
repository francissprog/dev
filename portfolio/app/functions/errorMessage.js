const { default: Swal } = require("sweetalert2")


const errorMessage = (message, setLoading, icon) => {
    Swal.fire({
        title: message,
        showCancelButton: false,
        showConfirmButton: false,
        icon: icon,
        timer : 1200
    })
    setTimeout(() => {
        setLoading(false);
    }, 1200);
}

export default errorMessage