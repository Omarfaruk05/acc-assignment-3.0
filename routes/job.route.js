const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobsController")



router.route("/")
.post(jobsController.createJobs)
.get(jobsController.findJobs)

module.exports = router;