const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review-controller.js');


router.get('/:menuCode', ReviewController.findReviewListByMenuCode)


module.exports = router;