import { Router } from "express";
import { loginController, registerController } from "../controller/authController.js";


const router = Router();


// post the router
router.post('/auth', loginController);
router.post('/auth/register', registerController);


export default router