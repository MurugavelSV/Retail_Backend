import jwt from "jsonwebtoken";

export default function jwtAuth(req, res, next){
    const token = req.headers["authorization"];
    if(!token){
        return res.status(401).send("Unauthorized");
    }
    try{
        const payload = jwt.verify(token, process.env.JWT_Secret);
        req.session.userId = payload.id;
        req.session.userType = payload.userType;
        next();
    }catch(err){
        return res.status(401).send("Unauthorized");
    }
}