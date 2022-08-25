const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu-controller');

router.get('/', MenuController.selectMenuList);

module.exports = router;