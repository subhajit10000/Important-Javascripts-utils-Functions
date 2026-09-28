
import jwt from "jsonwebtoken";
import env from "../config/env.js";
import ApiError from "./ApiError.js"


// gen acc token

const generateAccessToken = (user) => {
    return jwt.sign({
        id: user._id,
        email: user.email,
        role: user.role,
        type: "access",
    },
        env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: env.ACCESS_TOKEN_EXPIRES,
            issuer: env.JWT_ISSUER,
            audience: env.JWT_AUDIENCE
        }
    )
};


// ver acc token

const verifyAccessToken = async (token) => {
    try {
        return jwt.verify(token, env.ACCESS_TOKEN_SECRET, {
            issuer: env.JWT_ISSUER,
            audience: env.JWT_AUDIENCE
        })
    } catch (error) {
        throw new ApiError(401, "Invalid or Expired Access Token")
    }
}



export {
    generateAccessToken,
    verifyAccessToken
}
