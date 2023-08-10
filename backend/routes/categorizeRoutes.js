const express=require('express');
const router=express.Router();
const {newQuestion}=require('../controller/categorizeController')

router.route('/categorize/submit').post(newQuestion);

module.exports=router;
