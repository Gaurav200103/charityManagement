const jwt = require("jsonwebtoken");

exports.isLoginUser = async (req, res, next)=>{
  try {
    const token = req.headers.authorization;

    const user = await jwt.verify(token,"thisismysecretkey");
    
    if(!user){
      return res.json({
        message:"please login to use this feature",
        login:false
      })
    }
    
    
    req.user = user;

    next();

  } catch (error) {
    
  }
}