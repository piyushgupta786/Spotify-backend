const jwt = require("jsonwebtoken");


async function authArtist (req,res,next) {

    
    const token = req.cookies.token;
    
        if(!token){
            return res.status(401).json({
                message : " unauthorized"
            })
        }
    
        try {
             const decoded = jwt.verify(token, process.env.JWT_SECRET)
    
             if(decoded.role !== "artist"){
                return res.status(403).json({
                    message :"You have no access to post a music"
                })
             }

             req.user = decoded;

             next()


    } catch (error) {

        console.log(error);

        return res.status(401).json({
            message : "unauthorized"
        })
    }

}

async function authuser (req,res,next) {
    const token = req.cookies.token;

    if(!token){
     res.status(401).json({
            message: " unauthorised"
        })
    }

    try {
        
        const decoded = jwt.verify( token ,process.env.JWT_SECRET);

        if(decoded.role!=="user" && decoded.role!=="artist"){
            return res.status(403).json({
                message : " you dont have access"
            })
        }

        req.user = decoded;

        next()


    } catch (error) {
        console.log(error);

        return res.status(401).json({
            message : " unauthorised"
        })

        
    }
}

module.exports = {authArtist , authuser};