const express = require('express');
const router = express.Router();


const authorization = require('../middleware/authorization');
const verifyToken = require('../middleware/verifyToken');
const adminController = require("../controllers/admin.controller");



router.get("/candidate", verifyToken, authorization("admin"), adminController.findCandidate)
router.get("/manager", verifyToken, authorization("admin"), adminController.findManager)

module.exports = router;