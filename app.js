const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();




app.use(express());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Wellcome to ACC Assignment-3. Route is working");
});

module.exports = app;