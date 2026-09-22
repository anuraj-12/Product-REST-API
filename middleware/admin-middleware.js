
export const adminMiddleware = (req , res , next) =>{
    const role =  req.user.isAdmin
    if(!role){
        return res.status(401).json({message:"Access Denied.Your are not admin."})
    }
    next()
}