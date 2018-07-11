const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

// height checker
let heightChecker = (height) => {
    if(!height) {
        return false;
    }
    else {
        let regexp = /^1\d{2}$|^20\d$|^21\d$|^22\d$|^23\d$|^24\d$/;
        return regexp.test(height);
    }
}

// weight checker
let weightChecker = (weight) => {
    if(!weight) {
        return false;
    }
    else {
        let regexp = /^3\d{1}$|^4\d{1}$|^5\d{1}$|^6\d{1}$|^7\d{1}$|^8\d{1}$|^9\d{1}$|^1\d{2}$|^2\d{2}$/;
        return regexp.test(weight);
    }
}

// gender checker
let genderChecker = (gender) => {
    if(!gender) {
        return false;
    }
    else {
        let regexp = /^male$|^female$/;
        return regexp.test(gender);
    }
}

// activity checker
let activityChecker = (activity) => {
    if(!activity) {
        return false;
    }
    else {
        let regexp = /^sedentary$|^moderately_active$|^vigorously_active$/;
        return regexp.test(activity);
    }
} 

// age checker
let ageChecker = (age) => {
    if(!age) {
        return false;
    }
    else {
        let regexp = /^\d{1,2}$|^10\d{1}$|^11\d{1}$/;
        return regexp.test(age);
    }
}

// height validators
const heightValidators = [
    { validator: heightChecker, message: 'Height must be between 100kg and 249kg' }
];

// weight validators
const weightValidators = [
    { validator: weightChecker, message: 'Weight must be between 30kg and 299kg' }
];

// gender validators
const genderValidators = [
    { validator: genderChecker, message: 'Gender must be \'male\' or \'female\'' }
];

// activity validators
const activityValidators = [
    { validator: activityChecker, message: 'Activity must be \'sedentary\' or \'moderately_active\' or \'vigorously_active\'' }
];

// age validators
const ageValidators = [
    { validator: ageChecker, message: 'Age must be between 1 and 119 years' }
]


const physicalInfoSchema = new Schema({
    age: { type: Number, validate: ageValidators },
    height: { type: String, validate: heightValidators },
    weight: { type: String, validate: weightValidators },
    gender: { type: String, validate: genderValidators },
    activity: { type: String, validate: activityValidators },
    calories: { type: Number },
    username: { type: String }
});

const PhysicalInfo = module.exports = mongoose.model('physicalInfo', physicalInfoSchema);