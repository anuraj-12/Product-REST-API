
import express from "express"
import helmet from "helmet"
import { mongoDB } from "./utils/db.js"
import { env } from "./config/env.js"
import { AuthRouter } from "./routes/auth.routes.js"
import { productRouter } from "./routes/product.route.js"
import cookieParser from "cookie-parser"


const app = express()
const PORT = env.PORT


app.use(helmet())
app.use(express.json())
app.use(cookieParser())


await mongoDB()

app.use("/auth",AuthRouter)
app.use(productRouter)





app.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`)
})