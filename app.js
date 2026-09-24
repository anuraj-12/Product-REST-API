
import express from "express"
import helmet from "helmet"
import { mongoDB } from "./utils/db.js"
import { env } from "./config/env.js"
import { AuthRouter } from "./routes/auth.routes.js"
import { productRouter } from "./routes/product.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"


const app = express()
const PORT = env.PORT

const corsOption = {
    method: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    origin: env.UI_URL,
    credentials: true
}

app.use(helmet())
app.use(cors(corsOption))
app.use(express.json())
app.use(cookieParser())


await mongoDB()

app.use("/auth", AuthRouter)
app.use(productRouter)





app.listen(PORT, () => {
    console.log(`Server Running on address http://localhost:${PORT}`)
})