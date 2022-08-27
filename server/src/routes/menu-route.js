const express = require('express');
const router = express.Router();
const MenuController = require('../controllers/menu-controller');

router.get('/', MenuController.selectMenuList);
router.get('/:menuCode', MenuController.selectMenuByMenuCode);
module.exports = router;