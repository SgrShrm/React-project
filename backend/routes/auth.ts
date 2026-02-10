import {Router} from "express";
import authController from "../controller/auth"

const router = Router();

router.post("/login", authController.login)
router.post("signup", authController.signUp)


export default router;