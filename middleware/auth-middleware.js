
import jwt from  "jsonwebtoken"
import { User } from "../model/user-model.js"
import { env } from "../config/env.js"


export const authMiddleware =  async (req , res, next) =>{
 try {
    
    const authUser =  req.header("Authorization")
    if(!authUser){
        return res.status(401).json({message:"Unauthorized Token"})
    }

    const token  = await authUser.split(" ")[1]

    const decode =  jwt.verify(token,env.ACCESS_TOKEN)
    const user =  await User.findById({_id:decode.userId})
    
    
    if(!user){
        return res.status(400).json({message: "User not Found"})
    }

    req.user =  user
    next()
 } catch (error) {
    console.log(error)
 }

}