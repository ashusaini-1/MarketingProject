const express = require("express");
const {addProjectDetails}=require('../controller/projectController');

const router = express.Router();

router.route("/project/detail").post(addProjectDetails);


module.exports = router;
