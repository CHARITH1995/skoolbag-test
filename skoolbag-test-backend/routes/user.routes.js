const express = require('express');
const router = express.Router();
const usersController = require('../controllers/user.controller');

router.post('/register', usersController.registerUser);
router.post('/login', usersController.userLogin);


module.exports = router;