const userModel = require("../models/userModel");

// GET USER INFO
const getUserController = async (req, res) => {
  try {
    // FInD USER
    const user = await userModel.findById({ _id: req.body.id });
    //Validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "USer not Found",
      });
    }
    // Hide Password
    user.password = undefined;
    // respo
    res.status(200).send({
      success: true,
      message: "User get Succesfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get user API",
      error,
    });
  }
};

// UPDATE USER
const updateUserController = async (req, res) => {
  try {
    // FIND USER
    const user = await userModel.findById({ _id: req.body.id });
    // VALIDATION
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "USer not Found",
      });
    }
    // update
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    // SAVE USER
    await user.save();
    res.status(200).send({
      success: true,
      message: "User Updated Succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get user API",
      error,
    });
  }
};

module.exports = { getUserController, updateUserController };
