const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/worker_ctrl');

router.post('/', ctrl.createWorker);
router.get('/', ctrl.getWorkers);
router.get('/:id', ctrl.getWorkerById);
router.delete('/:id', ctrl.deleteWorkerById);

module.exports = router;
