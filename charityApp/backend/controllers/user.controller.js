const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res)=>{
  try {
    const {name, email, password,role} = req.body;

    const bcryptPassword = await bcrypt.hash(password, 10);

    const myuser = await User.create({name, email, password: bcryptPassword, role});


    res.json({
      message:"user created successfully",
      singup: true
    })


  } catch (error) {
    console.log(error);
    res.json({
      message:"something went wrong",
      singup: false
    })
  }
}

exports.loginUser = async (req, res)=>{
  try {
    const {email, password} = req.body;

    const user =await User.findOne({where : {email : email}});

    if(!user){
      return res.json({
        message:"user not found with this credential",
        login:false
      })
    }

    const isCorrect = await bcrypt.compare(password, user.password);

    if(!isCorrect){
      return res.json({
        message:"user not found with this credential",
        login:false
      })
    }

    const token = await jwt.sign({id:user.id, email:user.email}, "thisismysecretkey");
    console.log(user);
    res.json({
      message:"user login successfull",
      login:true,
      token,
      isOrganization: user.role == "organization" ? true : false
    })
  } catch (error) {
    console.log(error);
  }
}


exports.updateProfile = async (req, res)=>{
  try {
    const {name, email} = req.body;

    await User.update({name, email}, {where : {id: req.user.id}});

    res.json({
      message:"profile updated successfully",
      updated:true
    })
    
  } catch (error) {
    console.log(error);
  }
}