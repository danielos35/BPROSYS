const express = require('express');
const bprosysController = require('../controllers/bprosys.controller');

const router =  express.Router();

router.route('/bprosys').get(bprosysController.getDataBprosys);

module.exports = router;