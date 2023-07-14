const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/api/comments');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/:id', ensureLoggedIn, commentsCtrl.create);

// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;