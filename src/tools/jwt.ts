import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export default {
    signin(id : string){
        return jwt.sign({id},process.env.APP_SECRET,{expiresIn:"15 days"});
    },
    validate(req: Request, res: Response, next: NextFunction){
        const token  : any = req.headers.token;
        if(!token)return res.status(401).json({message:"You must provide a token"});
        jwt.verify(token, process.env.APP_SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: err.name, message: err.message });
            req.headers.id = decoded.id;
            next();
          });
    }
}
