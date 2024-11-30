const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantCntroller,
  getAllResturantCntroller,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");

const router = express.Router();

//routes
// CReate Resurant || POST
router.post("/create", authMiddleware, createResturantCntroller);

// GET RESTURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

// GET All RESTURANTS || GET
router.get("/getAll", getAllResturantCntroller);

// DELEYTE RESTURSNT || DELETE
router.delete("/delete/:id", authMiddleware, deleteResturantController);

module.exports = router;
