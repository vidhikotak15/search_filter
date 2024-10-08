const express = require('express');
const router = express.Router();
const { getItems } = require('./controllers/itemController');

router.route('/').get(getItems);

router.route('/').post(addItem);

module.exports = router;
