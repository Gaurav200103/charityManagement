const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

const Charity = sequelize.define("Charity", {
  title:{
    type:Sequelize.STRING,
    allowNull:false
  },
  desc:{
    type:DataTypes.TEXT("long"),
    allowNull:false
  },
  worth:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  donors:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  location:{
    type:Sequelize.STRING,
    allowNull:false
  },
  category:{
    type:Sequelize.STRING,
    allowNull:false
  }
},{
  timestamp:true
})

module.exports = Charity;