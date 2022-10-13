const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');



const userRoute = require("./routes/user.route");
const jobRoute = require("./routes/job.route");
const managerJobRoute = require("./routes/jobs.manager.route");
const adminRoute = require("./routes/admin.route");




app.use(express.json());
app.use(cors());

app.use("/jobs", jobRoute);
app.use("/user", userRoute);
app.use("/manager/jobs", managerJobRoute);
app.use("/", adminRoute);

app.get("/", (req, res) => {
    res.send("Wellcome to ACC Assignment-3. Route is working");
});

module.exports = app;