const jwt = require("jsonwebtoken");

const AdminauthMiddleware=(req,res,next)=>{
    const token = req.cookies.AdminToken;
    // console.log("Middleware:" , token);
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Token is not provided..." });
    }

    try {
        const VerifyToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = VerifyToken;
        next();
    } 
    catch (error) {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });

    }
    
};

module.exports =  AdminauthMiddleware;