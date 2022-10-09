const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

//MONGO DB CONNECTIONS
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
  .catch((error) => console.log("DB CONNECTION FAILED", error));

//CORS
app.use(cors());

//LOGGER
app.use(logger("combined"));

//JSON BODYPARSE
app.use(express.json());

//ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

//APP INITIALIZATION
app.listen(process.env.PORT || 3000, () => {
  console.log(`BACKEND SERVER IS RUNNING ON ${process.env.PORT}`);
}); //
