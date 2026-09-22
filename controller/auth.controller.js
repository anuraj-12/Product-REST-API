import { User } from "../model/user-model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { env } from "../config/env.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generate-token.js";



export const userRegister = async (req, res) => {
    try {

        const { username, email, password } = req.body

        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "User Already Exist!" })
        }
        const hashPassword = await bcrypt.hash(password, 12)
        const user = await User.create({
            username, email, password: hashPassword
        })

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie("token", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({ message: user.isAdmin ? " Welcome to admin" : " Register sucessfully", accessToken })


    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}


export const userLogin = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)

        res.cookie("token", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(201).json({ message: "Login Successfully", accessToken })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}


export const userLogout = (req, res) => {
    res.clearCookie("token")
    return res.status(200).json({ message: "Logout successfully" })
}

export const refreshToken = (req, res) => {
    try {
        const Token = req.cookies?.token;
        console.log( " Token ", Token)

        if (!Token) {
            return res.status(401).json({
                message: "Refresh token missing",
            });
        }

        jwt.verify(Token, env.REFRESH_TOKEN, async (err , decode) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" })
            }
            try {

                const user = await User.findById(decode.userId).select("-password")
               

                const newAccessToken = generateAccessToken(user)
                const newRefreshToken = generateRefreshToken(user)

                res.cookie("token", newRefreshToken, {
                    httpOnly: true,
                    secure: false,
                    sameSite: "lax",
                    maxAge: 7 * 24 * 60 * 60 * 1000
                })

                return res.status(200).json({ accessToken: newAccessToken})

            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: "server Error" })
            }
        })



    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Server Error" })
    }
}



export const authenticateUser = (req, res) => {
    const users = req.user
    return res.status(200).json(users)
}

