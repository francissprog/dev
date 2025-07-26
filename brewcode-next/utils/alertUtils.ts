import Swal from "sweetalert2";

// successAlert and ErrorAlert
const successAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "success",
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
  return true;
};
const errorAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
  return false;
};

// navAlert
const navHomeAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "info",
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
};
const navAuthAlert = (title: string, text: string) => {
  Swal.fire({
    icon: "info",
    title,
    text,
    showConfirmButton: false,
    timer: 1500,
  });
};
// export all alert functions

export { successAlert, errorAlert, navHomeAlert, navAuthAlert };
