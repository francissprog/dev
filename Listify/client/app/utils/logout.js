import Cookies from 'js-cookie'
import React from 'react'
import Swal from 'sweetalert2'

export const logout = (router) => {
    Swal.fire({
        title: "Are you sure you want to Logout? ",
        showCancelButton: true,
        icon: "question",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
            confirmButton: "custom-confirm-btn",
            cancelButton: "custom-cancel-btn",
        }
    }).then(result => {
        if (result.isConfirmed) {
            // remove the cookies
            Cookies.remove("token")
            Cookies.remove("username")
            return router.replace("/");
        }
    })

}

