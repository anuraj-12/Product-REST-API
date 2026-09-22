import { User } from "./model/user-model.js"
import bcrypt from "bcryptjs"
import { env } from "./config/env.js"
import { mongoDB } from "./utils/db.js"
const adminRole =  async() =>{
    try {
       await mongoDB()

        const userExits =  await  User.findOne({email:env.ADMIN_EMAIL})
        
        if(userExits){
            console.log("Admin Already exist!")
            process.exit(1)
        }

        const hashPassword =  await bcrypt.hash(env.ADMIN_PASS ,12)
        await User.create({
            username: "Admin",
            email:env.ADMIN_EMAIL,
            password:hashPassword,
            isAdmin:true
        })
        console.log("Admin Register Successfully")
        process.exit(0)

        

    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

}

adminRole()