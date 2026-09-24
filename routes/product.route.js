import { Router } from "express"
import *  as productController from "../controller/product.controller.js"
import { adminMiddleware } from "../middleware/admin-middleware.js"
import { authMiddleware } from "../middleware/auth-middleware.js"

const router = Router()

router.route("/product").get(productController.getproduct)
router.route("/add/product").post(authMiddleware, adminMiddleware, productController.addProduct)
router.route("/delete/product/:id").delete(authMiddleware, adminMiddleware, productController.deleteProduct)
router.route("/edit/product/:id").patch(authMiddleware, adminMiddleware, productController.editProduct)
router.route("/single/:id").get(productController.singleProduct)

export const productRouter = router