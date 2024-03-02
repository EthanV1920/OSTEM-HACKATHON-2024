const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
      })
      .then(console.log("MongoDB Connected"))
      .catch((err) => console.log(err));

app.use("/", (req, res) => 
{
    console.log("this is the home")
})
app.listen(process.env.PORT,() => {
    console.log("Backend is running.");
});


