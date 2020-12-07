const jwt = require('jsonwebtoken');

module.exports = {
    signin(id){
        return jwt.sign({id},process.env.APP_SECRET,{expiresIn:"15 days"});
    },
    verify(req,res,next){
        const { token } = req.headers;
        if(!token)return res.status(401).json({message:"You must provide a token"});
        jwt.verify(token, process.env.APP_SECRET, function(err, decoded) {
            if (err) return res.status(500).json({ auth: err.name, message: err.message });
            req.headers.id = decoded.id;
            next();
          });
    }
}
