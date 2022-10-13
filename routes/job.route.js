const express = require('express');
const router = express.Router();
const jobsController = require("../controllers/jobs.controller");
const applicationController = require ("../controllers/application.controller.js");
const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');

const uploader = require ("../middleware/uploader.js");



router.route("/")
.post(verifyToken, authorization("hiring manager"), jobsController.createJobs)
.get(jobsController.findJobs);


router.route("/:id")
.get(jobsController.findCandidateJobById)
.patch(verifyToken, authorization("hiring manager"), jobsController.updateJobs);

router.route("/:id/apply")
.post(verifyToken, authorization("candidate"), uploader.single("resume"), applicationController.createApplication);

module.exports = router;