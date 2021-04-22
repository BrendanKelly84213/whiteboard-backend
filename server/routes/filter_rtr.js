const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/filter_ctrl');

router.post('/', ctrl.createFilter);
router.get('/', ctrl.getFilters);
router.get('/:id', ctrl.getFilterById);
router.delete('/:id', ctrl.deleteFilterById);
router.put('/:id', ctrl.putFilterById);

module.exports = router;
