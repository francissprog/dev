import Swal from "sweetalert2";

const errorMessage = (message, icon, loading) => {
    Swal.fire({
        title: message,
        allowOutsideClick: false,
        icon: icon,
        showCancelButton: false,
        showConfirmButton: true,
        timer: 1200,
        showConfirmButton: false,
    });

    // Clear loading state after showing the message
    setTimeout(() => {
        if (loading === true) {
            setLoading(false); // Assuming `setLoading` is defined in the calling component
        }
    }, 1200);
};

export default errorMessage;