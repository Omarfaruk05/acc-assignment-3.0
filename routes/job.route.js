const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');



router.route("/")
.post(verifyToken, authorization("hiring manager"), jobsController.createJobs)
.get(jobsController.findJobs);


router.route("/:id")
.patch(verifyToken, authorization("hiring manager"), jobsController.updateJobs);

module.exports = router;