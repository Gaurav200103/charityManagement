const sequelize = require("../utils/db");
const Sequelize = require("sequelize");

const Project = sequelize.define("Project", {
  projectTitle:{
    type:Sequelize.STRING,
    allowNull:false
  },
  
},{
  timestamp:true
})

module.exports = Project;