
import { User } from "../model/user-model.js";
import jwt from "jsonwebtoken"
import { env } from "../config/env.js"
export const generateAccessToken = (user) => {
    return jwt.sign({ userId: user._id, username: user.username }, env.ACCESS_TOKEN, { expiresIn: "10min" })
}

export const generateRefreshToken  =  (user) =>{
    return jwt.sign({userId: user._id}, env.REFRESH_TOKEN, {expiresIn:"7d"} )
}