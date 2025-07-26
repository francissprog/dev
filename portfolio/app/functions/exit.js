import Swal from "sweetalert2";

const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Brave") > -1) {  
        return "Brave";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("OPR") > -1 || userAgent.indexOf("Opera") > -1) {
        return "Opera";
    } else if (userAgent.indexOf("Trident") > -1) {
        return "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
    } else if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    }

    return "Unknown";
};
const exit = () => {
    const browserInfo = getBrowserInfo();
    let redirectUrl = "https://www.example.com/";

    if (browserInfo === "Chrome" || browserInfo === "Brave" ||
        browserInfo === "Firefox" || browserInfo === "Edge" || 
        browserInfo === "Internet Explorer" || browserInfo === "Opera" 
        || browserInfo === "Safari") 
    {

            redirectUrl = "https://www.google.com/";
    }

    Swal.fire({
        title: "Do you want to exit?",
        allowOutsideClick: false,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        customClass: {
            confirmButton: "custom-confirm-btn",
            cancelButton: "custom-cancel-btn",
        }
    }).then(result => {
        if (result.isConfirmed) {
            console.log("Browser:", browserInfo); // Debugging or logging
            window.location.href = redirectUrl;
        }
    });
};


export default exit;
