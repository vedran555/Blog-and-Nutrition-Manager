const express = require('express');
const router = express.Router();
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const Blog = require('../models/blog');
const User = require('../models/user');

// Verifying token
router.use((req, res, next) => {
    const token = req.headers['authorization'];
    if(!token) {
        res.json({ success: false, msg: 'Token not provided' });
    }
    else {
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) {
                res.json({ success: false, msg: 'Token invalid' });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
});


// Create New Blog
router.post('/newBlog', (req, res) => {
        if(!req.body.title) {
            res.json({ success: false, msg: 'Title is not provided' });
        }
        else {
            if(!req.body.body) {
                res.json({ success: false, msg: 'Body is not provided' });
            }
            else {
                if(!req.body.createdBy) {
                    res.json({ success: false, msg: 'Creator is not provided' });
                }
                else {
                    const blog = new Blog({
                        title: req.body.title,
                        body: req.body.body,
                        createdBy: req.body.createdBy,
                        createdAt: Date.now()
                    });
                    blog.save((err) => {
                        if(err) {
                            if(err.errors) {
                                if(err.errors.title) {
                                    res.json({ success: false, msg: err.errors.title.message });
                                }
                                else {
                                    if(err.errors.body) {
                                        res.json({ success: false, msg: err.errors.body.message });
                                    }
                                    else {
                                        if(err.errors.createdBy) {
                                            res.json({ success: false, msg: err.errors.createdBy.message });
                                        }
                                        else {
                                        res.json({ success: false, msg: 'Blog can not be saved' });
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            res.json({ success: true, msg: 'New blog added successfully!' });
                        }  
                    });
                }
            }
        }
});

// Get All Blogs
router.get('/allBlogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!blogs) {
                res.json({ success: false, msg: 'No data found' });
            }
            else {
                res.json({ success: true, blogs: blogs });
            }
        }
    }).sort({ _id: -1 });
});

router.get('/searchByCreator', (req, res) => {
    let regexp1 = new RegExp(req.query.createdBy);
    let regexp2 = new RegExp(req.query.title);
    Blog.find({createdBy: regexp1, title: regexp2}, (err, blogs) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!blogs) {
                res.json({ success: false, msg: 'No data found' });
            }
            else {
                res.json({ success: true, blogs: blogs });
            }
        }
    });
});

// Get Blog To Be Edited
router.get('/singleBlog/:id', (req, res) => {
    if(!req.params.id) {
        res.json({ success: false, msg: 'Id is not provided' });
    }
    else {
        Blog.findOne({ _id: req.params.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog not found' });
                }
                else {
                    User.findOne({ _id: req.decoded.userId }, (err, user) => { //check if user who wants to edit post is the one who created it
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User not authenticated' });
                            }
                            else {
                                if(user.username !== blog.createdBy) {
                                    res.json({ success: false, msg: 'You are not allowed to edit this blog post' });
                                }
                                else {
                                    res.json({ success: true, blog: blog });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Edit Blog
router.put('/updateBlog', (req, res) => {
    Blog.findOne({ _id: req.body._id }, (err, blog) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!blog) {
                res.json({ success: false, msg: 'Blog not found' });
            }
            else {
                User.findById({ _id: req.decoded.userId }, (err, user) => {
                    if(err) {
                        res.json({ success: false, msg: err });
                    }
                    else {
                        if(!user) {
                            res.json({ success: false, msg: 'User not found' });
                        }
                        else {
                            if(user.username !== blog.createdBy) {
                                res.json({ success: false, msg: 'You can not make changes to this blog post' });
                            }
                            else {
                                blog.title = req.body.title;
                                blog.body = req.body.body;
                                blog.save((err) => {
                                    if(err) {
                                        res.json({ success: false, msg: 'Can not save changes' });
                                    }
                                    else {
                                        res.json({ success: true, msg: 'Updated successfully' });
                                    }
                                });
                            }
                        }
                    }
                });
            }
        }
    });
});

// Delete Blog
router.delete('/deleteBlog/:id', (req, res) => {
    if(!req.params.id) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ _id: req.params.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog can not be found' });
                }
                else {
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' });
                            }
                            else {
                                if(user.username !== blog.createdBy) {
                                    res.json({ success: false, msg: 'You can not delete this blog post' });
                                }
                                else {
                                    blog.remove((err) => {
                                        if(err) {
                                            res.json({ success: false, msg: err });
                                        }
                                        else {
                                            res.json({ success: true, msg: 'Deleted successfully!' });
                                        }
                                    })
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Like Blog
router.put('/likeBlog', (req, res) => {
    if(!req.body.id) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ _id: req.body.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog can not be found' });
                }
                else {
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' });
                            }
                            else {
                                if(user.username === blog.createdBy) {
                                    res.json({ success: false, msg: 'You can not like your own post' });
                                }
                                else {
                                    if(blog.likedBy.Array.includes(user.username)) {
                                        res.json({ success: false, msg: 'You already liked this post' });
                                    }
                                    else {
                                        if(blog.dislikedBy.Array.includes(user.username)) {
                                            blog.dislikes--;
                                            const indexOfUser = blog.dislikedBy.Array.indexOf(user.username);
                                            blog.dislikedBy.Array.splice(indexOfUser, 1);
                                            blog.likes++;
                                            blog.likedBy.Array.push(user.username);
                                            blog.save((err) => {
                                                if(err) {
                                                    res.json({ success: false, msg: 'Can not save' });
                                                }
                                                else {
                                                    res.json({ success: true, msg: 'Liked successfully!' });
                                                }
                                            });
                                        }
                                        else {
                                            blog.likes++;
                                            blog.likedBy.Array.push(user.username);
                                            blog.save((err) => {
                                                if(err) {
                                                    res.json({ success: false, msg: 'Can not save' });
                                                }
                                                else {
                                                    res.json({ success: true, msg: 'Liked successfully!' });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Dislike Blog
router.put('/dislikeBlog', (req, res) => {
    if(!req.body.id) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ _id: req.body.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog can not be found' });
                }
                else {
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' });
                            }
                            else {
                                if(user.username === blog.createdBy) {
                                    res.json({ success: false, msg: 'You can not dislike your own post' });
                                }
                                else {
                                    if(blog.dislikedBy.Array.includes(user.username)) {
                                        res.json({ success: false, msg: 'You already disliked this post' });
                                    }
                                    else {
                                        if(blog.likedBy.Array.includes(user.username)) {
                                            blog.likes--;
                                            const indexOfUser = blog.likedBy.Array.indexOf(user.username);
                                            blog.likedBy.Array.splice(indexOfUser, 1);
                                            blog.dislikes++;
                                            blog.dislikedBy.Array.push(user.username);
                                            blog.save((err) => {
                                                if(err) {
                                                    res.json({ success: false, msg: 'Can not save' });
                                                }
                                                else {
                                                    res.json({ success: true, msg: 'Disliked successfully!' });
                                                }
                                            });
                                        }
                                        else {
                                            blog.dislikes++;
                                            blog.dislikedBy.Array.push(user.username);
                                            blog.save((err) => {
                                                if(err) {
                                                    res.json({ success: false, msg: 'Can not save' });
                                                }
                                                else {
                                                    res.json({ success: true, msg: 'Disliked successfully!' });
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Profile of Likers and Dislikers
router.get('/profile/:username', (req, res) => {
    if(!req.params.username) {
        res.json({ success: flase, msg: 'Username not provided' });
    }
    else {
        User.findOne({ username: req.params.username }, (err, user) => {
            if(err) {
                res.json({ success: flase, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: flase, msg: 'User can not be found' });
                }
                else {
                    res.json({ success: true, user: user });
                }
            }
        }); 
    }
});

// Post a Comment
router.post('/comment', (req, res) => {
    if(!req.body.id) {
        res.json({ success: false, msg: 'Blog id is not provided' });
    }
    else {
        Blog.findOne({ _id: req.body.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog can not be found' });
                }
                else {
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' });
                            }
                            else {
                                const comm = {
                                    comment: req.body.comment,
                                    commentator: user.username
                                };
                                blog.comments.push({
                                    comment: req.body.comment,
                                    commentator: user.username,
                                    createdAt: Date.now()
                                });
                                blog.save((err) => {
                                    if(err) {
                                        res.json({ success: false, msg: err });
                                    }
                                    else {
                                        res.json({ success: true, msg: 'Comment saved successfully!' });
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
});

// Delete Comment
router.delete('/deleteComment/:id', (req, res) => {
    if(!req.params.id) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ "comments._id": req.params.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Comment can not be found' });
                }
                else {
                    let ind = blog.comments.findIndex(com => com._id.toString() === req.params.id);
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err }); 
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' }); 
                            }
                            else {
                                if(user.username !== blog.comments[ind].commentator) {
                                    res.json({ success: false, msg: 'You are not allowed to delete this comment' }); 
                                }
                                else {
                                    blog.comments.splice(ind, 1);
                                    blog.save((err) => {
                                        if(err) {
                                            res.json({ success: false, msg: err });
                                        }
                                        else {
                                            res.json({ success: true, msg: 'Comment deleted successfully!' });                            
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Get Comment(by comment id)
router.get('/getComment/:id', (req, res) => {
    if(!req.params.id) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ "comments._id": req.params.id }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Comment can not be found' });
                }
                else {
                    let ind = blog.comments.findIndex(com => com._id.toString() === req.params.id);
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: err }); 
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' }); 
                            }
                            else {
                                if(user.username !== blog.comments[ind].commentator) {
                                    res.json({ success: false, msg: 'You are not allowed to delete this comment' }); 
                                }
                                else {
                                    res.json({ success: true, comment: blog.comments[ind] }); 
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// Edit Comment
router.put('/editComment', (req, res) => {
    if(!req.body.commId) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        Blog.findOne({ "comments._id": req.body.commId }, (err, blog) => {
            if(err) {
                res.json({ success: false, msg: 'error at finding blog' });
            }
            else {
                if(!blog) {
                    res.json({ success: false, msg: 'Blog can not be found' });
                }
                else {
                    let ind = blog.comments.findIndex(comm => comm._id.toString() === req.body.commId);
                    User.findOne({ _id: req.decoded.userId }, (err, user) => {
                        if(err) {
                            res.json({ success: false, msg: 'error at finding user' });
                        }
                        else {
                            if(!user) {
                                res.json({ success: false, msg: 'User can not be found' });
                            }
                            else {
                                if(user.username !== blog.comments[ind].commentator) {
                                    res.json({ success: false, user: user, comment: blog.comments[ind], 
                                        msg: 'You are not allowed to edit this comment' });
                                }
                                else {
                                    blog.comments[ind].comment = req.body.comment;
                                    blog.comments[ind].createdAt = Date.now();
                                    blog.save((err) => {
                                        if(err) {
                                            res.json({ success: false, msg: 'Comment can not be edited' });
                                        }
                                        else {
                                            res.json({ success: true, msg: 'Comment edited successfully!' });
                                        }
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// search titles 
router.get('/searchTitles/:title', (req, res) => {
    let regexp_title = new RegExp("^"+req.params.title, "i");
    Blog.find({ title:regexp_title }, (err, blogs) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!blogs) {
                res.json({ success: false, msg: 'no blogs were found' });
            }
            else {
                res.json({ success: true, blogs: blogs });
            }
        }
    })
});

// search authors (returning only authors, not whole blog posts)
router.get('/searchAuthors/:author', (req, res) => {
    let regexp_author = new RegExp("^"+req.params.author, "i");
    Blog.find({ createdBy:regexp_author }).distinct('createdBy').exec((err, authors) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, authors: authors });
        }
    });
});

// search blogs by title and author 
router.get('/searchBlogs', (req, res) => {
    if(req.query.title === '' && req.query.author !== '') {
        Blog.find({ createdBy: req.query.author }, (err, blogs) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blogs) {
                    res.json({ success: false, msg: 'No blogs were found' });
                }
                else {
                    res.json({ success: true, blogs: blogs });
                }
            }
        });
    }
    else if(req.query.author === '' && req.query.title !== '') {
        Blog.find({ title: req.query.title }, (err, blogs) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blogs) {
                    res.json({ success: false, msg: 'No blogs were found' });
                }
                else {
                    res.json({ success: true, blogs: blogs });
                }
            }
        });
    }
    else if(req.query.author !== '' && req.query.title !== '') {
        Blog.find({ title: req.query.title, createdBy: req.query.author }, (err, blogs) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!blogs) {
                    res.json({ success: false, msg: 'No blogs were found' });
                }
                else {
                    res.json({ success: true, blogs: blogs });
                }
            }
        });
    }
    
});

module.exports = router;