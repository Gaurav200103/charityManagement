const sequelize = require("../utils/db");
const Sequelize = require("sequelize");

const User = sequelize.define("User", {
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
    allowNull:false,
    unique:true
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  role:{
    type:Sequelize.ENUM("organization","user"),
    allowNull:false
  }
},{
  timestamp:true
})

module.exports = User;