const express = require('express');
const router = express.Router();
const WeekMenuController = require('../controllers/week-menu-controller');


router.get('/', WeekMenuController.selectWeekMenuList);

module.exports = router;