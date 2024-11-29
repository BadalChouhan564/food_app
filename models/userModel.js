const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is Required"],
    },
    email: {
      type: String,
      required: [true, "email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is Required"],
    },
    address: {
      type: Array,
    },
    phone: {
      type: String,
      required: [true, "phone number is Required"],
    },
    usertype: {
      type: String,
      required: [true, "user type is Required"],
      default: "client",
      enum: ["client", "admin", "vender", "driver"],
    },
    profile: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2012/04/13/21/07/user-33638_640.png",
    },
    answer: {
      type: String,
      required: [true, "Answer is Required"],
    },
  },
  { timestamp: true }
);

// expoert
module.exports = mongoose.model("User", userSchema);
