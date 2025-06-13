

const express = require('express');
const router = express.Router();

// Temporary in-memory storage for blog posts
let blogPosts = [
    { id: 1, title: 'First Post', content: 'This is my first blog post!' },
    { id: 2, title: 'Second Post', content: 'Another interesting post.' }
];

// GET all blog posts
router.get('/', (req, res) => {
    res.render('blog/index', { posts: blogPosts, title: 'Blog Posts' });
});

// GET form to create new post
router.get('/new', (req, res) => {
    res.render('blog/new', { title: 'New Post' });
});

// POST create new post
router.post('/', (req, res) => {
    const newPost = {
        id: blogPosts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    blogPosts.push(newPost);
    res.redirect('/blog');
});

module.exports = router;