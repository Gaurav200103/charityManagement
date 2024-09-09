const Charity = require('../models/charity.model');
const Donor = require('../models/donor.model');
const Project = require("../models/project.model");
const Stripe = require("stripe");
const {Op} = require("sequelize");

const stripe = new Stripe('sk_test_51PmJeCFulXZcPQcwAyKUO6AFL1ta47BKQQ2Aw92iut9ABwl4bVZoQ51GBvxArNfJbqJ8Epe7EO9FzkoytRiAHAzA00tGKwJvas');

exports.addCharity = async (req, res)=>{
  try {

    const {title, desc, location, category} = req.body;

    await Charity.create({title, desc, worth: 0, donors: 0, location, category, UserId: req.user.id});

    res.json({
      message:"charity created successfully",
      created: true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.addProject = async (req, res)=>{
  try {
    const {title}= req.body;
    const {id} = req.params;

    await Project.create({projectTitle:title, CharityId : id});

    res.json({
      message:"project created successfully",
      created: true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.donate = async (req, res) => {
  try {
    const {id} = req.params;
  const session = await stripe.checkout.sessions.create({
    line_items:[
      {
        price_data:{
          currency:"INR",
          unit_amount:100 * 100,
          product_data:{
            name:"Premium Subscription"
          }
        },
        quantity:1
      }
    ],
    mode:"payment",
    success_url: `http://localhost:3000/complete/${req.user.id}/${id}`,
    cancel_url:"http://localhost:3000/cancel"
  })

  
  console.log(session);

  res.json({
    url: session.url
  })
    
  } catch (error) {
    console.log(error);
    res.send("error");
  }
}

exports.donated = async (req, res)=>{
  try {
    const {id, charityId} = req.params;

    const charity = await Charity.findOne({where :{id:charityId}});

    await Charity.update({donors: charity.donors + 1, worth: charity.worth + 100}, {where: {id:charityId}});

    await Donor.create({charityId: charityId, userId: id});

    res.redirect("http://localhost:5173");
    res.json({
      message:"donated successfully",
      success:true
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.myDonation= async (req, res)=>{
  try {
    
    const myDonation = await Donor.findAll({where:{userId: req.user.id}});

    const arr = myDonation.map(item =>{
      return item.charityId
    })

    const charities = await Charity.findAll({where :{
      charityId:{
        [Op.in]:arr
      }
    }})

    res.json({
      charities
    })
    
  } catch (error) {
    console.log(error);
  }
}


exports.myCharity = async (req, res)=>{
  try {

    const charities = await Charity.findAll({ where : {UserId: req.user.id}});

    res.json({
      charities
    })
    
  } catch (error) {
    console.log(error);
  }
}

exports.getCharites = async (req, res)=>{
  try {

    const charities = await Charity.findAll({});

    res.json({
      charities
    })
    
  } catch (error) {
    console.log(error);
  }
}