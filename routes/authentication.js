const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Register
router.post('/register', (req, res) => {
    let newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err) {
            if(err.code === 11000) {
                res.json({ success: false, msg: 'E-mail or username already exists' });
            }
            else {
                if(err.errors) {
                    if(err.errors.email) {
                        res.json({ success: false, msg: err.errors.email.message });
                    }
                    else {
                        if(err.errors.username) {
                            res.json({ success: false, msg: err.errors.username.message });
                        }
                    }
                }
                else {
                    res.json({ success: false, msg: 'Could not save user' });
                }
            }
        }
        else {
            res.json({ success: true, msg: 'User added' });
        }
    });
});

// Find E-mail
router.get('/checkEmail/:email', (req, res) => {
    if(!req.params.email) {
        res.json({ success: false, msg:'E-mail is not provided' });
    }
    else {
        User.findOne({email: req.params.email}, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(user) {
                    res.json({ success: false, msg:'E-mail is already taken' });
                }
                else {
                res.json({ success: true, msg:'E-mail is avaliable' });
                }
            }
        });
    }
});

// Find Username
router.get('/checkUsername/:username', (req, res) => {
    if(!req.params.username) {
        res.json({ success: false, msg:'Username not provided' });
    }
    else {
        User.findOne({username: req.params.username}, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(user) {
                    res.json({ success: false, msg:'Username is already taken' });
                }
                else {
                    res.json({ success: true, msg:'Username is avaliable' });
                }
            }
        });
    }
});

// Login
router.post('/login', (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.json({ success: false, msg:'Username and/or password not provided' });
    }
    else {
        const username = req.body.username.toLowerCase();
        const password = req.body.password.toLowerCase();
        User.findOne({username: username}, (err, user) =>{
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(user) {
                    if(user.approved === false) {
                        res.json({ success: false, msg: 'Your registration still is not approved by admin' });
                    }
                    else {
                        User.comparePassword(password, user.password, (err, isMatch) => {
                            if(err) {
                                res.json({ success: false, msg: err });
                            }
                            else {
                                if(isMatch) {
                                    const token = jwt.sign({userId: user._id}, config.secret, {expiresIn: '24h'});
                                    res.json({ success: true, token: token, user: user,
                                         msg: 'You are logged in!' });
                                }
                                else {
                                    res.json({ success: false, msg: 'Wrong password' });
                                }
                            }
                        });
                    }
                }
                else {
                    res.json({ success: false, msg: 'Username does not exist' });
                }
            }
        });
    }
});

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

 // Get Profile
router.get('/profile', (req, res) => {
    User.findOne({_id: req.decoded.userId}, (err, user) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!user) {
                res.json({ success: false, msg: 'User not found' });
            }
            else {
                res.json({ success: true, user: user });
            }
        }
    });
});

// Get All Profiles That Need To Be Approved
router.get('/notApprovedProfiles', (req, res) => {
    User.find({ approved: false }, (err, users) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            res.json({ success: true, users: users });
        }
    });
});

//Approve Registration Request
router.put('/approveRequest', (req, res) => {
    if(!req.body.usersId) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        User.findOne({ _id: req.body.usersId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User can not be found' });
                }
                else {
                    if(user.approved === true) {
                        res.json({ success: false, msg: 'Registration already approved' });
                    }
                    else {
                        user.approved = true;
                        user.save((err) => {
                            if(err) {
                                res.json({ success: false, msg: 'User can not be saved' });
                            }
                            else {
                                res.json({ success: true, msg: 'Registration approved!' });
                            }
                        });
                    }
                }
            }
        });
    }
});

// Delete Registration Request
router.delete('/deleteRequest/:usersId', (req, res) => {
    if(!req.params.usersId) {
        res.json({ success: false, msg: 'Id not provided' });
    }
    else {
        User.findOne({ _id: req.params.usersId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User can not be found' });
                }
                else {
                    if(user.approved === true) {
                        res.json({ success: false, msg: 'Can not delete request which is approved' });
                    }
                    else {
                        user.remove((err) => {
                            if(err) {
                                res.json({ success: false, msg: 'Can not delete request' });
                            }
                            else {
                                res.json({ success: true, msg: 'Request deleted ' });
                            }
                        });
                    }
                }
            }
        });
    }
});

module.exports = router;