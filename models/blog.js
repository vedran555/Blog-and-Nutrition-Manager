const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Title Length Checker
let titleLengthChecker = (title) => {
    if(!title) {
        return false;
    }
    else {
        if(title.length<5 || title.length>50) {
            return false;
        }
        else {
            return true;
        }
    }
}

// Title Validity Checker
let titleValidityChecker = (title) => {
    if(!title) {
        return false;
    }
     else {
         let regexp = new RegExp(/^[a-zA-Z0-9 ]+$/);
         return regexp.test(title);
     }
}

// Title Vlidators
const titleValidators = [
    { validator: titleLengthChecker, message: 'Title must be between 5 and 50 characters long' },
    { validator: titleValidityChecker, message: 'Title can contain only alphanumerical characters' }
]

// Body Length Checker
let bodyLengthChecker = (body) => {
    if(!body) {
        return false;
    }
    else {
        if(body.length<2 || body.length>500) {
            return false;
        }
        else {
            return true;
        }
    }
}

// Body validators
const bodyValidators = [
    { validator: bodyLengthChecker, message: 'Body must be between 2 and 500 characters long' }
]

// Comment Length Checker
let commentLengthChecker = (comment) => {
    if(!body) {
        return false;
    }
    else {
        if(comment[0].length<1 || comment[0].length>200) {
            return false;
        }
        else {
            return true;
        }
    }
}

// Comment validators
const commentValidators = [
    { validator: commentLengthChecker, message: 'Comment must be between 1 and 200 characters long' }
]

const blogSchema = new Schema({
    title: { type: String, validate: titleValidators },
    body: { type: String, validate: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { Array },
    comments: [
        {
            comment: { type: String},// validate: commentValidators },
            commentator: { type: String },
            createdAt: { type: Date, default: Date.now() }
        }
    ]
});

const Blog = module.exports = mongoose.model('blog', blogSchema);