const Sequelize = require("sequelize");

const sequelize =new Sequelize("charitiprogram", "root", "password", {
  host:"localhost",
  dialect:"mysql"
});

module.exports = sequelize;

