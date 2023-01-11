import { Router,Request, Response } from "express";
import authController from "../controllers/auth";
import  log  from "../middleware/log";

const router = Router();

router.post('/register', authController.registerController)
router.post('/login', authController.logInController)

export {router}