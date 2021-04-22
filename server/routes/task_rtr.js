const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/task_ctrl');

router.post('/', ctrl.createTask);
router.get('/', ctrl.getTasks);
router.get('/:id', ctrl.getTaskById);
router.delete('/:id', ctrl.deleteTaskById);
router.put('/:id', ctrl.putTaskById);

module.exports = router;
