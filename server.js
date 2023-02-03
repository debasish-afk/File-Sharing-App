require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path=require("path")

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => console.log("MongoDB is connected"))
  .catch((err) => console.log(err));

// Template engine
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","ejs")

// Routes
app.use("/api/files",require('./routes/files'))
app.use("/files",require("./routes/show"))
app.use("/files/download",require("./routes/download"))


app.listen(PORT, () => {
  console.log(`Listening on port${PORT}`);
});
