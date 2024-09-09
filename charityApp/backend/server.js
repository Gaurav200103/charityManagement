const express = require("express");
const app = express();
const sequelize = require("./utils/db");
const cors = require("cors");
app.use(cors());

const User = require("./models/user.model");
const Charity = require("./models/charity.model");
const Donors = require("./models/donor.model");



const userRouter = require("./routers/user.router");
const charityRouter = require("./routers/charity.router");


app.use(express.json());

app.use(userRouter);
app.use(charityRouter);

User.hasMany(Charity);
Charity.belongsTo(User);


sequelize.sync().then(()=>{
  app.listen(3000);
  console.log("database connected successfully");
})