const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantCntroller,
  getAllResturantCntroller,
} = require("../controllers/resturantController");

const router = express.Router();

//routes
// CReate Resurant || POST
router.post("/create", authMiddleware, createResturantCntroller);

// GET All RESTURANTS || GET
router.get("/getAll", getAllResturantCntroller);
module.exports = router;
