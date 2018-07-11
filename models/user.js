const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// E-mail validation
let emailLengthChecker = (email) => {
    if(!email) {
        return false;
    } 
    else {
        if(email.length<5 || email.length>30) {
            return false;
        }
        else {
            return true;
        }
    }
};

let validEmailChecker = (email) => {
    if(!email) {
        return false;
    }
    else {
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        return regexp.test(email);
    }
};



// Username validation
let usernameLengthChecker = (username) => {
    if(!username) {
        return false;
    } 
    else {
        if(username.length<5 || username.length>30) {
            return false;
        }
        else {
            return true;
        }
    }
};

let usernameValid = (username) => {
    if(!username) {
        return false;
    }
    else {
        //let regexp = new RegExp(/^[a-zA-Z0-9]+$/);
        let regexp = new RegExp(/^[a-z]+$/);
        return regexp.test(username);
    }
};


//
const emailValidators = [
    { validator: emailLengthChecker, message: 'E-mail must be between 5 and 30 characters length' },
    { validator: validEmailChecker, message: 'E-mail must be valid' }
];

const usernameValidators = [
    { validator: usernameLengthChecker, message: 'Username must be between 5 and 30 characters length' },
    { validator: usernameValid, message: 'Username must be valid' }
];



// User Schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, validate: emailValidators },
    username: { type: String, required: true, unique: true, lowercase: true, validate: usernameValidators },
    password: { type: String, required: true },
    approved: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false }
});

// User Model
const User = module.exports = mongoose.model('User', userSchema);

// Add User
module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash;
            console.log(hash);
            newUser.save(callback);
        });
    });
}

// Compare Password
module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}
