const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');



const userRoute = require("./routes/user.route");




app.use(express.json());
app.use(cors());


app.use("/user", userRoute);

app.get("/", (req, res) => {
    res.send("Wellcome to ACC Assignment-3. Route is working");
});

module.exports = app;