import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

export const  requireSignIn =async(req,res,next)=>{
try {
    const decode=jwt.verify(req.headers.authorization,SECRET_KEY);
    req.user=decode;
    next();   
} catch (error) {
    res.status(error)
}
}