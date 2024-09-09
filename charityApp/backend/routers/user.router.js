const express = require("express");
const { registerUser, loginUser, updateProfile } = require("../controllers/user.controller");
const {isLoginUser} = require("../middlewares/auth");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/updateUser", isLoginUser, updateProfile);



module.exports = router;