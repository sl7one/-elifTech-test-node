const express = require('express');

const ctrl = require('../../controllers');
const router = express.Router();

router.get('/', ctrl.getHistory);
router.post('/', ctrl.setHistory);

module.exports = router;
