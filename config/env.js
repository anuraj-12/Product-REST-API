import dotenv from "dotenv"

dotenv.config()

export const env = {
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL,
    ACCESS_TOKEN:process.env.ACCESS_TOKEN,
    REFRESH_TOKEN:process.env.REFRESH_TOKEN,
    ADMIN_EMAIL:process.env.ADMIN_EMAIL,
    ADMIN_PASS:process.env.ADMIN_PASS,
}