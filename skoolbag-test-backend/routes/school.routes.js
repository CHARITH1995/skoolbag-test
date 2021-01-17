const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schools.controller');

router.post('/add', schoolController.schoolAdd);
router.get('/get', schoolController.getSchools);
router.get('/get/:id', schoolController.getSchoolById);
router.get('/gets/recent', schoolController.getRecentlyAddSchools);


module.exports = router;