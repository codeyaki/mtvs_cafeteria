const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/review-controller.js');


router.get('/:menuCode', ReviewController.findReviewListByMenuCode)
router.post('/', ReviewController.newReivew)

module.exports = router;