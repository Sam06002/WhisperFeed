const express = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes after this middleware
router.use(authMiddleware.protect);

// Get all posts
router.get('/', postController.getAllPosts);

// Get a specific post
router.get('/:id', postController.getPost);

// Create a new post
router.post('/', postController.createPost);

// Update a post
router.patch('/:id', postController.updatePost);

// Delete a post
router.delete('/:id', postController.deletePost);

module.exports = router; 