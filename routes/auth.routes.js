import {Router} from "express"
import *  as authController from  "../controller/auth.controller.js"
import {authMiddleware} from  "../middleware/auth-middleware.js"



const router  =  Router()

router.route("/register").post(authController.userRegister)
router.route("/login").post(authController.userLogin)
router.route("/logout").post(authMiddleware, authController.userLogout)
router.route("/refresh").post(authMiddleware, authController.refreshToken)
router.route("/user").get(authMiddleware, authController.authenticateUser)

export const AuthRouter = router