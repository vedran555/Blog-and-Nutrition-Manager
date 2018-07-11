const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// date validity checker (without checking if date is 30 february or 31 april, ...)
let dateChecker = (date) => {
    if(!date) {
        return false;
    }
    else {
        let day = date.slice(0,2);
        let month = date.slice(3,5);
        let year = date.slice(6,10);
        let currentYear = (new Date()).getFullYear();
        console.log('day= '+day+', month= '+month+', year= '+year+', currYear= '+currentYear);
        if(isNaN(day) || isNaN(month) || isNaN(year)) {
            return false;
        }
        else {
            if((day<1 || day>31) || (month<1 || month>12) || (year<1960 || year>currentYear)) {
                return false;
            }
            else { 
                return true; 
            }
        }
    }
}

// date validators
let dateValidators = [
    { validator: dateChecker, message: 'Provide correct date please' }
]

const mealsSchema = new Schema({
    username: { type: String },
    date: { type: String, validate: dateValidators },
    breakfast: [
        {
            food: { type: String },
            quantity: { type: Number }
        }
    ],
    lunch: [
        {
            food: { type: String },
            quantity: { type: Number }
        }
    ],
    dinner: [
        {
            food: { type: String },
            quantity: { type: Number }
        }
    ],
    additionally: [
        {
            food: { type: String },
            quantity: { type: Number }
        }
    ]
});

const Meal = module.exports = mongoose.model('meal', mealsSchema);