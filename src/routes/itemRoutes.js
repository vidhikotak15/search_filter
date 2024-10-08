const express = require('express');
const router = express.Router();
const { getItems, addItem } = require('../controller/itemController');

router.route('/').get(getItems);

router.route('/').post(addItem);

module.exports = router;
