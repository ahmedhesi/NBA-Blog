const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', postsCtrl.create);
// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;