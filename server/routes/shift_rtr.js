const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/shift_ctrl');

router.post('/', ctrl.createShift);
router.get('/', ctrl.getShifts);
router.get('/:id', ctrl.getShiftById);
router.delete('/:id', ctrl.deleteShiftById);
router.put('/:id', ctrl.putShiftById);

module.exports = router;
