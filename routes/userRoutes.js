const express = require("express");
const {
  getUserController,
  updateUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// Update PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

module.exports = router;
