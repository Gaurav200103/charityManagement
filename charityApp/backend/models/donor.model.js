const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const DataTypes = require("sequelize");

const Donor = sequelize.define("Donor", {
  charityId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  userId:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
  timestamp:true
})

module.exports = Donor;