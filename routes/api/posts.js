const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/', ensureLoggedIn, postsCtrl.create);

router.get('/', ensureLoggedIn, postsCtrl.index);
router.get('/myblogs', ensureLoggedIn, postsCtrl.getMyBlog);
router.get('/:id', ensureLoggedIn, postsCtrl.show)
router.put('/:id', ensureLoggedIn, postsCtrl.updatePost);


// POST /api/users/login
// router.post('/login', usersCtrl.login);

module.exports = router;