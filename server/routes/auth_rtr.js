const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/auth_ctrl');

router.post('/register', ctrl.register);
router.post('/login', ctrl.login);
router.get('/', ctrl.getUsers);
router.get('/:id', ctrl.getUserById);
router.delete('/:id', ctrl.deleteUserById);
router.put('/:id', ctrl.putUserById);

module.exports = router;
