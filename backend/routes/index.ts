import { Router } from "express";



const router = Router()


router.use("/auth", authRoute);
router.use("/products", Protect, productRoute)