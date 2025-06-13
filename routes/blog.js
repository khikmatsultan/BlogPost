

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

// GET edit form (place this with your other GET routes)              //////////////////////////////////////////
router.get('/:id/edit', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = blogPosts.find(post => post.id === postId);
    res.render('blog/edit', { post: post });
});

// POST handle update (place this with your other POST routes)              /////////////////////////////////////
router.post('/:id/update', (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = {
        id: postId,
        title: req.body.title,
        content: req.body.content
    };
    blogPosts = blogPosts.map(post => 
        post.id === postId ? updatedPost : post
    );
    res.redirect('/blog');
});






module.exports = router;