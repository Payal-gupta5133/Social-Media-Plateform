const express = require('express');
const Post = require('../models/post');
const User = require('../models/user');
const router = express.Router();

// Create a Post
router.post('/create', async (req, res) => {
  const { userId, content } = req.body;
  try {
    const newPost = new Post({ user: userId, content });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating post' });
  }
});

module.exports = router;
