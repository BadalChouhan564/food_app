const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

// REGISTER
const registerConteoller = async (req, res) => {
  try {
    const { userName, email, password, phone, address } = req.body;
    // validation
    if (!userName || !email || !password || !phone || !address) {
      return res.status(500).send({
        success: false,
        message: "please provide All Fields",
      });
    }

    // CHECK USER
    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(500).send({
        success: false,
        message: "Email Already Registerd please Login",
      });
    }
    // HAshing PAssword
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //create new User
    const user = await userModel.create({
      userName,
      email,
      password: hashedPassword,
      address,
      phone,
    });
    return res.status(201).send({
      success: true,
      message: "Succesfully Registerd",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in register Api",
      error,
    });
  }
};

// LOGIN

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please Provide Email or PAssword",
      });
    }

    // CHECK USER
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "USer not Found",
      });
    }
    // Check USer password || compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid credential",
      });
    }
    // Token
    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login Succesfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login Api",
      error,
    });
  }
};

module.exports = { registerConteoller, loginController };
