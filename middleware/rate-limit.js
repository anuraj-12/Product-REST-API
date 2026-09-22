
import { rateLimit } from "express-rate-limit"

export const apiLimit = rateLimit({

    windowMs: 10 * 60 * 1000,
    limit: 100,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        message: "Too many request try again after 10 minutes."
    }

})

export const loginLimit = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 5,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: "Too many request try again after 5 minutes."
})

export const registerLimit = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-8",
    legacyHeaders: false,
    message: {
        message: "Too many request try again after 5 minutes."
    }

})