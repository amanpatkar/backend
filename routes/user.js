const express = require("express");
const router = express.Router();
const userController = require("../controller/user")

router.post("/signup", userController.createUser);

router.post("/login",userController.userLogin)

module.exports = router;