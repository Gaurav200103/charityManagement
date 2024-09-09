const express = require("express");
const {isLoginUser} = require("../middlewares/auth");
const { addCharity, addProject, donate, donated, myDonation, myCharity, getCharites } = require("../controllers/charity.controller");
const router = express.Router();


router.post("/addCharity", isLoginUser, addCharity);
router.post("/addProject", isLoginUser, addProject);
router.post("/donate/:id",isLoginUser, donate);
router.get("/complete/:id/:charityId", donated);
router.get("/myDonation", isLoginUser, myDonation);
router.get("/myCharities", isLoginUser, myCharity);
router.get("/charities", getCharites);

module.exports = router;