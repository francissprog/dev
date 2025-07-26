import Swal from "sweetalert2";

//  behaviors
export const scrollTo = (id: string) => {
  return document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

// responsive styles
export const responsivePadding = "max-lg:px-14 max-md:px-12 max-sm:px-10";
export const responsiveText = "max-lg:text-4xl max-md:text-3xl max-sm:text-2xl";

//  responsive interactive
export const showNavbar = () => {
  Swal.fire({
    title: "Where do you want to go ?",
    html: `
    <div class="flex flex-col gap-5 items-start">
      <div>
          <button id="test" class="cursor-pointer">About</button>
      </div>
      <div>
      </div>
    </div>
  `,
    showConfirmButton: false,
    didOpen: () => {
      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("test")?.addEventListener("click", () => {
          console.log("clicked");
          scrollTo("about");
        });
        Swal.close();
      });
    },
  });
};
