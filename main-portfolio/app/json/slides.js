import { LuListTodo } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";


 const slides = [
    {
        id: 1, 
        title: "Listify",
        description: "Listify is a full-stack todo list application that allows users to manage their tasks efficiently. It features user authentication to ensure that each user's data is private and secure.",
        demo: "https://production-omega-rust.vercel.app/",
        icon: LuListTodo,
        source: "https://github.com/Franciss-prog/web-app-projects/tree/main/Listify",
    },{
        id: 2,
        title: "Login Authentication",
        description: "This project uses serverless architecture with Next.js to provide secure login and registration features. It offers scalable and ensuring a smooth user experience without managing server infrastructure.",
        icon: FaRegUserCircle,
        demo: "https://next-login-authentication.vercel.app/",
        source: "https://github.com/example/slide3",
    },
  ];
  
export default slides  