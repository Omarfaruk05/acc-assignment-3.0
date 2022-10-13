const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');

router.route("/")
.get(verifyToken, authorization("hiring manager"), jobsController.findMangerJobs)

router.route("/:id")
.get(verifyToken, authorization("hiring manager"), jobsController.findMangerJobById)



module.exports = router;