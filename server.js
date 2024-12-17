const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectdB = require("./config/db");

// dotenv configuration
dotenv.config();

// DB Connection
connectdB();

// rest object
const app = express();

// MiddleWares
app.use(cors()); // if another directry then  ({path:'/..'})
app.use(express.json()); // json format me access karne ke liye
app.use(morgan("dev"));

// route
// URl =>  http:/localhost:8000
app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1>Welcome to Food Server App </h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

// listen

app.listen(PORT, () => {
  console.log(` Serve Running on port ${PORT} `.bgBlue.bgBlack);
});
