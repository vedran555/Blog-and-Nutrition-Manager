const express = require('express');
const router = express.Router();
const config = require('../config/database');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const PhysicalInfo = require('../models/physicalInfo');
const Meals = require('../models/meal');
const Grocerie = require('../models/grocerie');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

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

// calculate BMR
let calculateBMR = (weight, height, age, gender, activity) => {
    let BMR = 10*Number(weight) + 6.25*Number(height) - 5*Number(age);
    if(gender === 'male') {
        BMR += 5;
    }
    if(gender === 'female') {
        BMR -= 161;
    }
    if(activity === 'sedentary') {
        BMR *= 1.53;
    }
    if(activity === 'moderately_active') {
        BMR *= 1.76;
    }
    if(activity === 'vigorously_active') {
        BMR *= 2.25;
    }
    return BMR;
}

// Add User's physical info to database
router.post('/postPhysicalInfo', (req, res) => {
    if(!req.body.height || !req.body.weight || !req.body.gender || !req.body.activity || !req.body.age) {
        res.json({ success: false, msg: 'Some of the required fields not provided' });
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
                    PhysicalInfo.findOne({ username: user.username }, (err, info) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(info) {
                                res.json({ success: false, msg: 'You have already provided your physical info' });
                            }
                            else {
                                let BMR = calculateBMR(req.body.weight, req.body.height, req.body.age, 
                                    req.body.gender, req.body.activity);
                                let newinfo = new PhysicalInfo({
                                    age: req.body.age,
                                    height: req.body.height,
                                    weight: req.body.weight,
                                    gender: req.body.gender,
                                    activity: req.body.activity,
                                    calories: BMR,
                                    username: user.username
                                });
                                newinfo.save((err) => {
                                    if(err) {
                                        if(err.errors.height) {
                                            res.json({ success: false, msg: err.errors.height.message });
                                        }
                                        else {
                                            if(err.errors.weight) {
                                                res.json({ success: false, msg: err.errors.weight.message });
                                            }
                                            else {
                                                if(err.errors.gender) {
                                                    res.json({ success: false, msg: err.errors.gender.message });
                                                }
                                                else {
                                                    if(err.errors.activity) {
                                                        res.json({ success: false, msg: err.errors.activity.message });
                                                    }
                                                    else {
                                                        if(err.errors.age) {
                                                            res.json({ success: false, msg: err.errors.age.message });
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        res.json({ success: true, msg: 'Physical info added to database successfully!' });
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

// check if user has already added physical info to database
router.get('/getInfo', (req, res) => {
    User.findOne({ _id: req.decoded.userId }, (err, user) => {
        if(err) {
            res.json({ success: false, msg: err });
        }
        else {
            if(!user) {
                res.json({ success: false, msg: 'User can not be found' });
            }
            else {
                PhysicalInfo.findOne({ username: user.username }, (err, info) => {
                    if(err) {
                        res.json({ success: false, msg: err });
                    }
                    else {
                        if(!info) {
                            res.json({ success: false, msg: 'This user isn\'t in the database' });
                        }
                        else {
                            res.json({ success: true,  info: info });
                        }
                    }
                });
            }
        }
    });
});

// edit user's physical info
router.put('/editInfo', (req, res) => {
     if(!req.body.age || !req.body.height || !req.body.weight || !req.body.gender || !req.body.activity) {
         res.json({ success: false, msg: 'Please provide all fields' });
     }
     else {
         User.findOne({ _id: req.decoded.userId }, (err, user) => {
             if(err) {
                 res.json({ success: false, msg: err });
             }
             else {
                 if(!user) {
                     res.json({ success: false, msg: 'User not found' });
                 }
                 else {
                     PhysicalInfo.findOne({ username: user.username }, (err, info) => {
                         if(err) {
                             res.json({ success: false, msg: err });
                         }
                         else {
                            if(!info) {
                                res.json({ success: false, msg: 'Please provide your physical info first' });
                            }
                            else {
                                if(info.age == req.body.age && info.height == req.body.height && 
                                    info.weight == req.body.weight && info.gender == req.body.gender && 
                                    info.activity == req.body.activity
                                ) {
                                    res.json({ success: false, msg: 'You have to edit something if you want to update info' });
                                }
                                else {
                                    let BMR = calculateBMR(req.body.weight, req.body.height, req.body.age, 
                                        req.body.gender, req.body.activity);
                                    info.age = req.body.age;
                                    info.height = req.body.height;
                                    info.weight = req.body.weight; 
                                    info.gender = req.body.gender;
                                    info.activity = req.body.activity;
                                    info.calories = BMR;
                                    info.save((err) => {
                                        if(err) {
                                            if(err.errors.height) {
                                                res.json({ success: false, msg: err.errors.height.message });
                                            }
                                            else {
                                                if(err.errors.weight) {
                                                    res.json({ success: false, msg: err.errors.weight.message });
                                                }
                                                else {
                                                    if(err.errors.gender) {
                                                        res.json({ success: false, msg: err.errors.gender.message });
                                                    }
                                                    else {
                                                        if(err.errors.activity) {
                                                            res.json({ success: false, msg: err.errors.activity.message });
                                                        }
                                                        else {
                                                            if(err.errors.age) {
                                                                res.json({ success: false, msg: err.errors.age.message });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        else {
                                            res.json({ success: true, reqBody: req.body, info: info,
                                                 msg: 'Physical info edited successfully!' });
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

// add or edit meals
router.put('/editMeals', (req, res) => {
    if(!req.body.date) {
        res.json({ success: false, msg: 'Date not provided' });
    }
    else {
        if( (!req.body.breakfast[0].food && !req.body.breakfast[0].quantity) &&
        (!req.body.lunch[0].food && !req.body.lunch[0].quantity) &&
        (!req.body.dinner[0].food && !req.body.dinner[0].quantity) &&
        (!req.body.additionally[0].food && !req.body.additionally[0].quantity) ) {
            res.json({ success: false, msg: 'You have to provide at least one meal and quantity for it' });
        }
        else {
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
                if(err) {
                    res.json({ success: false, msg: err });
                }
                else {
                    if(!user) {
                        res.json({ success: false, msg: 'User not found' });
                    }
                    else {
                        Meals.findOne({ date: req.body.date }, (err, meals) => {
                            if(err) {
                                res.json({ success: false, msg: err });
                            }
                            else {
                                if(!meals) {
                                    let meals = new Meals({
                                        date: req.body.date,
                                        username: user.username,
                                        breakfast: req.body.breakfast,
                                        lunch: req.body.lunch,
                                        dinner: req.body.dinner,
                                        additionally: req.body.additionally
                                    });
                                    meals.save((err) => {
                                        if(err) {
                                            if(err.errors.date) {
                                                res.json({ success: false, msg: err.errors.date.message });     
                                            }
                                            else {
                                                res.json({ success: false, msg: err }); 
                                            }   
                                        }
                                        else {
                                            res.json({ success: false, msg: 'Meals saved successfully!' });
                                        }
                                    });
                                }
                                else {
                                    meals.breakfast.splice(0);
                                    meals.lunch.splice(0);
                                    meals.dinner.splice(0);
                                    meals.additionally.splice(0);
                                    meals.breakfast = req.body.breakfast;
                                    meals.lunch = req.body.lunch;
                                    meals.dinner = req.body.dinner;
                                    meals.additionally = req.body.additionally;
                                    meals.save((err) => {
                                        if(err) {
                                            if(err.errors.date) {
                                                res.json({ success: false, msg: err.errors.date.message });     
                                            }
                                            else {
                                                res.json({ success: false, msg: err });
                                            }
                                        }
                                        else {
                                            res.json({ success: true, msg: 'Edited successfully!' })
                                        }
                                    });
                                }
                            }
                        });
                    }
                }
            });
        }
    }
});

// check if food exists in groceries collections
router.get('/checkForFood/:foodName', (req, res) => {
    Grocerie.findOne({ food: req.params.foodName }, (err, grocerie) => {
        if(err) {
            res.json({ success: false, msg: 'error occured,error: ', err });
        }
        else {
            if(!grocerie) {
                res.json({ success: false, msg: 'Grocerie not found' });
            }
            else {
                res.json({ success: true, msg: 'Grocerie found successfully', grocerie: grocerie });
            }
        }
    });
});

// get all food which contains sent characters in its name
router.get('/searchGroceries/:food', (req, res) => {
    if(!req.params.food) {
        res.json({ success: false, msg: 'Food not provided' });
    }
    else {
        let regexp = new RegExp(req.params.food, "i");
        Grocerie.find({ food: regexp }, (err, groceries) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!groceries) {
                    res.json({ success: false, msg: 'No groceries were found' });
                }
                else {
                    res.json({ success: true, groceries: groceries });
                }
            }
        });
    }
});

// push today's meal to array of breakfast items
router.put('/pushMeal', (req, res) => {
    if(!req.body.meal) {
        res.json({ success: false, msg: 'Error! Type of meal not provided' })
    }
    let meal = req.body.meal.toString();
    if(!req.body.items) {
        res.json({ success: false, msg: meal +' or date or type not provided' });
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                    Meals.findOne({ username: user.username, date: req.body.date }, (err, meals) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!meals) {
                                let newmeals = new Meals({
                                    username: user.username,
                                    date: req.body.date
                                });
                                if(meal=='breakfast') {
                                    newmeals.breakfast = req.body.items;
                                }
                                if(meal=='lunch') {
                                    newmeals.lunch = req.body.items;
                                }
                                if(meal=='dinner') {
                                    newmeals.dinner = req.body.items;
                                }
                                if(meal=='additionally') {
                                    newmeals.additionally = req.body.items;
                                }
                                newmeals.save((err) => {
                                    if(err) {
                                        if(err.errors.date) {
                                            res.json({ success: false, msg: err.errors.date.message });
                                        }
                                    }
                                    else {
                                        res.json({ success: true, msg: meal + ' saved successfully!' });
                                    }
                                });
                            }
                            else {
                                let x = req.body.items;
                                for(let i in x) {
                                    if(meal=='breakfast') {
                                        meals.breakfast.push(x[i]);
                                    }
                                    if(meal=='lunch') {
                                        meals.lunch.push(x[i]);
                                    }
                                    if(meal=='dinner') {
                                        meals.dinner.push(x[i]);
                                    }
                                    if(meal=='additionally') {
                                        meals.additionally.push(x[i]);
                                    }
                                }
                                meals.save((err) => {
                                    if(err) {
                                        res.json({ success: false, msg: 'Can\'t save '+ meal + ' due to error' });
                                    }
                                    else {
                                        res.json({ success: true, msg: 'New food added to '+meal+'!' });
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

// get specific informations about each grocerie eaten for breakfast,lunch,dinner and additionally
router.get('/getMealsInfo/:date', (req, res) => {
    if(!req.params.date) {
        res.json({ success: false, msg: 'You must provide date for which you want to get specific infos about meals' });
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                    Meals.findOne({ username: user.username, date: req.params.date }, (err, mealsDB) => {
                        let todBreakfastSpec = [];
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!mealsDB) {
                                res.json({ success: false, msg: 'No meals for date: '+req.params.date })
                            }
                            else {
                                 if(mealsDB.breakfast!='' || mealsDB.lunch!='' || mealsDB.dinner!='' ||
                                     mealsDB.additionally!='') {
                                    let todBreakfast = mealsDB.breakfast;
                                    let todLunch = mealsDB.lunch;                               
                                    let todDinner = mealsDB.dinner;
                                    let todAdditionally = mealsDB.additionally;
                                    let meals = [];
                                    meals.push(todBreakfast); meals.push(todLunch); meals.push(todDinner);
                                    meals.push(todAdditionally);
                                    let todBreakfastSpec = []; let todLunchSpec = [];
                                    let todDinnerSpec = []; let todAdditionallySpec = [];
                                    let mealsToReturn = [];
                                    // order of pushing to the array matters because of the later for loop *
                                    mealsToReturn.push(todBreakfastSpec); mealsToReturn.push(todLunchSpec);
                                    mealsToReturn.push(todDinnerSpec); mealsToReturn.push(todAdditionallySpec);
                                    let sumInfo = [];
                                    let breakfastInfo = {
                                        energy: 0,
                                        proteins: 0,
                                        carbohydrates: 0,
                                        sugar: 0,
                                        fat: 0,
                                        saturated: 0,
                                        monounsaturated: 0
                                    }; 
                                    let lunchInfo = {
                                        energy: 0,
                                        proteins: 0,
                                        carbohydrates: 0,
                                        sugar: 0,
                                        fat: 0,
                                        saturated: 0,
                                        monounsaturated: 0
                                    }; let dinnerInfo = {
                                        energy: 0,
                                        proteins: 0,
                                        carbohydrates: 0,
                                        sugar: 0,
                                        fat: 0,
                                        saturated: 0,
                                        monounsaturated: 0
                                    }; let additionallyInfo = {
                                        energy: 0,
                                        proteins: 0,
                                        carbohydrates: 0,
                                        sugar: 0,
                                        fat: 0,
                                        saturated: 0,
                                        monounsaturated: 0
                                    };
                                    sumInfo.push(breakfastInfo); sumInfo.push(lunchInfo); sumInfo.push(dinnerInfo); 
                                    sumInfo.push(additionallyInfo);
                                    
                                    for(let h=0; h<4; h++) {
                                        for(let i=0; i<meals[h].length; i++) {
                                            Grocerie.findOne({ food: meals[h][i].food }, (err, groc) => {
                                                if(err) {
                                                    res.json({ success: false, msg: err });
                                                }
                                                else {
                                                    let q = meals[h][i].quantity;
                                                    let id = meals[h][i]._id; 
                                                    let object = {
                                                        id: id, 
                                                        food: groc.food,
                                                        quantity: q,
                                                        energy: Math.round(groc.energy*q/100),
                                                        proteins: Math.round(groc.proteins*q/100 * 100) / 100,
                                                        carbohydrates: Math.round(groc.carbohydrates*q/100 * 100) / 100,
                                                        sugar: Math.round(groc.sugar*q/100 * 100) / 100,
                                                        fat: Math.round(groc.fat*q/100 * 100) / 100,
                                                        saturated: Math.round(groc.saturated*q/100 * 100) / 100,
                                                        monounsaturated: Math.round(groc.monounsaturated*q/100 * 100) / 100,
                                                    }
                                                    sumInfo[h].energy += object.energy;
                                                    sumInfo[h].proteins += object.proteins;
                                                    sumInfo[h].carbohydrates += object.carbohydrates;
                                                    sumInfo[h].sugar += object.sugar;
                                                    sumInfo[h].fat += object.fat;
                                                    sumInfo[h].saturated += object.saturated;
                                                    sumInfo[h].monounsaturated += object.monounsaturated;

                                                    mealsToReturn[h].push(object);
                                                    
                                                    if(mealsToReturn[0].length === meals[0].length &&
                                                        mealsToReturn[1].length === meals[1].length &&
                                                        mealsToReturn[2].length === meals[2].length &&
                                                        mealsToReturn[3].length === meals[3].length) {
                                                            let totalInfo = {
                                                                energy: 0, proteins: 0, carbohydrates: 0,
                                                                sugar: 0, fat: 0, saturated: 0, monounsaturated: 0
                                                            };
                                                            let cuttedSumInfo = roundInfo(sumInfo);
                                                            for(let x=0; x<4; x++) {
                                                                totalInfo.energy += cuttedSumInfo[x].energy;
                                                                totalInfo.proteins += Number(cuttedSumInfo[x].proteins);
                                                                totalInfo.carbohydrates += Number(cuttedSumInfo[x].carbohydrates);
                                                                totalInfo.sugar += Number(cuttedSumInfo[x].sugar);
                                                                totalInfo.fat += Number(cuttedSumInfo[x].fat);
                                                                totalInfo.saturated += Number(cuttedSumInfo[x].saturated);
                                                                totalInfo.monounsaturated += Number(cuttedSumInfo[x].monounsaturated);
                                                            }
                                                            totalInfo.proteins = Math.round(totalInfo.proteins * 100) / 100;
                                                            totalInfo.carbohydrates = Math.round(totalInfo.carbohydrates * 100) / 100;
                                                            totalInfo.sugar = Math.round(totalInfo.sugar * 100) / 100;
                                                            totalInfo.fat = Math.round(totalInfo.fat * 100) / 100;
                                                            totalInfo.saturated = Math.round(totalInfo.saturated * 100) / 100;
                                                            totalInfo.monounsaturated = Math.round(totalInfo.monounsaturated * 100) / 100;
                                                            res.json({ success: true, msg: 'Success, meals info returned!',
                                                                            mealsInfo: mealsToReturn, 
                                                                            sumInfo: cuttedSumInfo,
                                                                            totalInfo: totalInfo });
                                                    }
                                                }
                                            });
                                        }
                                    }
                                } //od if-a za uslov !=[]
                                 else {
                                    let totalInfo = {
                                        energy: 0, proteins: 0, carbohydrates: 0,
                                        sugar: 0, fat: 0, saturated: 0, monounsaturated: 0
                                    };
                                    res.json({ success: false, msg: 'All meals are empty', totalInfo: totalInfo });
                                }
                                
                            }
                        }
                    }); 
                }
            }
        });
    }
});

// round sum infos Math.round(x * 100) / 100;
let roundInfo = (sums) => {
    for(let i=0; i<4; i++) {
        sums[i].proteins = Math.round(sums[i].proteins * 100) / 100;
        sums[i].carbohydrates = Math.round(sums[i].carbohydrates * 100) / 100;
        sums[i].sugar = Math.round(sums[i].sugar * 100) / 100;
        sums[i].fat = Math.round(sums[i].fat * 100) / 100;
        sums[i].saturated = Math.round(sums[i].saturated * 100) / 100;
        sums[i].monounsaturated = Math.round(sums[i].monounsaturated * 100) / 100;
    }
    return sums;
}

// delete food from meal
router.delete('/deleteFood', (req, res) => {
    if(!req.query.food || !req.query.quant || !req.query.meal || !req.query.date) {
        res.json({ success: false, msg: 'Date, food, quantity, and meal must be provided!' });
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                    Meals.findOne({ username: user.username, date: req.query.date }, (err, meals) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!meals) {
                                res.json({ success: false, msg: 'There is no meals for date: '+req.query.date });
                            }
                            else {
                                switch(req.query.meal) {
                                    case "Breakfast":
                                        meals.breakfast = removeFood(meals.breakfast, req.query.food, req.query.quant);
                                        meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Breakfast\'s food deleted successfully!',
                                                meals: meals });
                                            }
                                        });
                                        break;
                                    case "Lunch": 
                                        meals.lunch = removeFood(meals.lunch, req.query.food, req.query.quant);
                                        meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Lunch\'s food deleted successfully!',
                                                meals: meals });
                                            }
                                        });
                                        break;
                                    case 'Dinner': 
                                        meals.dinner = removeFood(meals.dinner, req.query.food, req.query.quant);
                                        meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Dinner\'s food deleted successfully!',
                                                meals: meals });
                                            }
                                        });
                                        break;
                                    case 'Additionally': 
                                        meals.additionally = removeFood(meals.additionally, req.query.food, req.query.quant);
                                        meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Additionally\'s food deleted successfully!',
                                                meals: meals });
                                            }
                                        });
                                        break;
                                    default: res.json({ successs: false, msg: 'Error! Undefined meal name' }); break;
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// find food for food name and quantity in given array and remove ir from array
let removeFood = (meal, food, quant) => {
    let ind = meal.findIndex(item => item.food == food && item.quantity == quant);
    if(ind>-1) {
        meal.splice(ind, 1);
    }
    return meal;
}

// delete meal if it is empty
router.delete('/deleteMeal/:date', (req, res) => {
    if(!req.params.date) {
        res.json({ success: false, msg: 'Date not provided' })
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                    Meals.findOne({ username: user.username, date: req.params.date }, (err, meal) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!meal) {
                                res.json({ success: false, msg: 'Meal not found' });
                            }
                            else {
                                if(meal.breakfast == '' && meal.lunch == '' && meal.dinner == '' &&
                                   meal.additionally == '') {
                                    meal.remove((err) => {
                                        if(err) {
                                            res.json({ success: false, msg: 'Can\'t delete due to error' });
                                        }
                                        else {
                                            res.json({ success: true, msg: 'Empty meal deleted!' });
                                        }
                                    });
                                }
                                else {
                                    res.json({ success: false, msg: 'Meal is not empty' });
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// edit food (quantity) --> single quantity edit
router.put('/editSingleFood', (req, res) => {
    if(!req.body.date || !req.body.food || !req.body.quant || !req.body.newQuant || !req.body.mealName) {
        res.json({ success: false, msg: 'Date, food, quantity or updated quantity is missing!' });
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                    Meals.findOne({ username: user.username, date: req.body.date }, (err, meals) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!meals) {
                                res.json({ success: false, msg: 'No meals for date: '+req.body.date });
                            }
                            else {
                                switch(req.body.mealName) {
                                    case 'Breakfast':
                                        let object1 = 
                                        updateQuantity(meals.breakfast, req.body.food, req.body.quant, req.body.newQuant);
                                        if(object1.found) {
                                            meals.breakfast = object1.array;
                                            meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Single quantity of breakfast edited successfully!' });
                                            }
                                            });
                                        }
                                        else if(!object1.found) {
                                            res.json({ success: false, msg: 'Food in breakfast not found' });
                                        }
                                        break;
                                    case 'Lunch':
                                        let object2 = 
                                        updateQuantity(meals.lunch, req.body.food, req.body.quant, req.body.newQuant);
                                        if(object2.found) {
                                            meals.lunch = object2.array;
                                            meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Single quantity of lunch edited successfully!' });
                                            }
                                            });
                                        }
                                        else if(!object2.found) {
                                            res.json({ success: false, msg: 'Food in lunch not found' });
                                        }
                                        break;
                                    case 'Dinner':
                                        let object3 = 
                                        updateQuantity(meals.dinner, req.body.food, req.body.quant, req.body.newQuant);
                                        if(object3.found) {
                                            meals.dinner = object3.array;
                                            meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Single quantity of dinner edited successfully!' });
                                            }
                                            });
                                        }
                                        else if(!object3.found) {
                                            res.json({ success: false, msg: 'Food in dinner not found' });
                                        }
                                        break;
                                    case 'Additionally':
                                        let object4 = 
                                        updateQuantity(meals.additionally, req.body.food, req.body.quant, req.body.newQuant);
                                        if(object4.found) {
                                            meals.additionally = object4.array;
                                            meals.save((err) => {
                                            if(err) {
                                                res.json({ success: false, msg: err });
                                            }
                                            else {
                                                res.json({ success: true, msg: 'Single quantity of additionally edited successfully!' });
                                            }
                                            });
                                        }
                                        else if(!object4.found) {
                                            res.json({ success: false, msg: 'Food in additionally not found' });
                                        }
                                        break;
                                    default: res.json({ success: false, msg: 'Undefined meal name!' }); break;
                                }
                            }
                        }
                    });
                }
            }
        });
    }
});

// update edited quantity for given array, food name, quantity and updated quantity
let updateQuantity = (array, food, quant, newQuant) => {
    let ind = array.findIndex(item => item.food == food && item.quantity == quant);
    if(ind > -1) {
        array[ind].quantity = newQuant;
        return { found: true, array: array };
    }
    else {
        return { found: false, array: null };
    }
}

router.get('/getSomeMeals/:period', (req, res) => {
    if(req.params.period != '3days' && req.params.period != 'week' && req.params.period != 'month' &&
    req.params.period != 'all') {
        res.json({ success: false, msg: 'Please provide period for which you want to get informations' });
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' });
                }
                else {
                        let dates = calculateDates(req.params.period, user.username);
                        let len = dates.length;
                        let missing = [];
                        let periodmeals = [];
                        for(let p=0; p<len; p++) {
                            Meals.findOne({ username: user.username, date: dates[p] }, (err, mealsDB) => {
                                if(err) {
                                    res.json({ success: false, msg: err });
                                }
                                else {
                                    if(!mealsDB) {
                                        missing.push(dates[p]);
                                        let ss = periodmeals.length+missing.length;
                                        if(periodmeals.length+missing.length == dates.length) {
                                            periodmeals.sort(compareDate);
                                            missing.sort(compareDateMiss);
                                            res.json({ success: true, periodmeals: periodmeals, missing: missing,
                                                msg: 'meals for period sent' });
                                        }
                                    }
                                    else {
                                        let dd = periodmeals.length+missing.length;
                                        if(periodmeals.length+missing.length == dates.length) {
                                            res.json({ periodmeals: periodmeals, missing: missing });
                                        }
                                        if(mealsDB.breakfast!='' || mealsDB.lunch!='' || mealsDB.dinner!='' ||
                                         mealsDB.additionally!='') {
                                        let todBreakfast = mealsDB.breakfast;
                                        let todLunch = mealsDB.lunch;                               
                                        let todDinner = mealsDB.dinner;
                                        let todAdditionally = mealsDB.additionally;
                                        let meals = [];
                                        meals.push(todBreakfast); meals.push(todLunch); meals.push(todDinner);
                                        meals.push(todAdditionally);
                                        let todBreakfastSpec = []; let todLunchSpec = [];
                                        let todDinnerSpec = []; let todAdditionallySpec = [];
                                        let mealsToReturn = [];
                                        // order of pushing to the array matters because of the later for loop *
                                        mealsToReturn.push(todBreakfastSpec); mealsToReturn.push(todLunchSpec);
                                        mealsToReturn.push(todDinnerSpec); mealsToReturn.push(todAdditionallySpec);
                                        let sumInfo = [];
                                        let breakfastInfo = {
                                            energy: 0,
                                            proteins: 0,
                                            carbohydrates: 0,
                                            sugar: 0,
                                            fat: 0,
                                            saturated: 0,
                                            monounsaturated: 0
                                        }; 
                                        let lunchInfo = {
                                            energy: 0,
                                            proteins: 0,
                                            carbohydrates: 0,
                                            sugar: 0,
                                            fat: 0,
                                            saturated: 0,
                                            monounsaturated: 0
                                        }; let dinnerInfo = {
                                            energy: 0,
                                            proteins: 0,
                                            carbohydrates: 0,
                                            sugar: 0,
                                            fat: 0,
                                            saturated: 0,
                                            monounsaturated: 0
                                        }; let additionallyInfo = {
                                            energy: 0,
                                            proteins: 0,
                                            carbohydrates: 0,
                                            sugar: 0,
                                            fat: 0,
                                            saturated: 0,
                                            monounsaturated: 0
                                        };
                                        sumInfo.push(breakfastInfo); sumInfo.push(lunchInfo); sumInfo.push(dinnerInfo); 
                                        sumInfo.push(additionallyInfo);
                                        
                                        for(let h=0; h<4; h++) {
                                            for(let i=0; i<meals[h].length; i++) {
                                                Grocerie.findOne({ food: meals[h][i].food }, (err, groc) => {
                                                    if(err) {
                                                        res.json({ success: false, msg: err });
                                                    }
                                                    else {
                                                        if(!groc) {
                                                            res.json({ success: false, msg: 'No grocerie for that food name' })
                                                        }
                                                        else {
                                                            let q = meals[h][i].quantity;
                                                            let id = meals[h][i]._id;
                                                            let object = {
                                                                id: id,
                                                                food: groc.food,
                                                                quantity: q, 
                                                                energy: Math.round(groc.energy*q/100),
                                                                proteins: Math.round(groc.proteins*q/100 * 100) / 100,
                                                                carbohydrates: Math.round(groc.carbohydrates*q/100 * 100) / 100,
                                                                sugar: Math.round(groc.sugar*q/100 * 100) / 100,
                                                                fat: Math.round(groc.fat*q/100 * 100) / 100,
                                                                saturated: Math.round(groc.saturated*q/100 * 100) / 100,
                                                                monounsaturated: Math.round(groc.monounsaturated*q/100 * 100) / 100,
                                                            }
                                                            sumInfo[h].energy += object.energy;
                                                            sumInfo[h].proteins += object.proteins;
                                                            sumInfo[h].carbohydrates += object.carbohydrates;
                                                            sumInfo[h].sugar += object.sugar;
                                                            sumInfo[h].fat += object.fat;
                                                            sumInfo[h].saturated += object.saturated;
                                                            sumInfo[h].monounsaturated += object.monounsaturated;
        
                                                            mealsToReturn[h].push(object);
                                                            
                                                            if(mealsToReturn[0].length === meals[0].length &&
                                                                mealsToReturn[1].length === meals[1].length &&
                                                                mealsToReturn[2].length === meals[2].length &&
                                                                mealsToReturn[3].length === meals[3].length) {
                                                                    let totalInfo = {
                                                                        energy: 0, proteins: 0, carbohydrates: 0,
                                                                        sugar: 0, fat: 0, saturated: 0, monounsaturated: 0
                                                                    };
                                                                    let cuttedSumInfo = roundInfo(sumInfo);
                                                                    for(let x=0; x<4; x++) {
                                                                        totalInfo.energy += cuttedSumInfo[x].energy;
                                                                        totalInfo.proteins += Number(cuttedSumInfo[x].proteins);
                                                                        totalInfo.carbohydrates += Number(cuttedSumInfo[x].carbohydrates);
                                                                        totalInfo.sugar += Number(cuttedSumInfo[x].sugar);
                                                                        totalInfo.fat += Number(cuttedSumInfo[x].fat);
                                                                        totalInfo.saturated += Number(cuttedSumInfo[x].saturated);
                                                                        totalInfo.monounsaturated += Number(cuttedSumInfo[x].monounsaturated);
                                                                    }
                                                                    totalInfo.proteins = Math.round(totalInfo.proteins * 100) / 100;
                                                                    totalInfo.carbohydrates = Math.round(totalInfo.carbohydrates * 100) / 100;
                                                                    totalInfo.sugar = Math.round(totalInfo.sugar * 100) / 100;
                                                                    totalInfo.fat = Math.round(totalInfo.fat * 100) / 100;
                                                                    totalInfo.saturated = Math.round(totalInfo.saturated * 100) / 100;
                                                                    totalInfo.monounsaturated = Math.round(totalInfo.monounsaturated * 100) / 100;
                                                                    periodmeals.push({ mealsInfo: mealsToReturn, 
                                                                                       sumInfo: cuttedSumInfo,
                                                                                       totalInfo: totalInfo,
                                                                                       date: dates[p],
                                                                                       id: mealsDB._id });
                                                                    let ll = periodmeals.length+missing.length;
                                                                    if(periodmeals.length+missing.length == dates.length) {
                                                                        periodmeals.sort(compareDate);
                                                                        missing.sort(compareDateMiss);
                                                                        res.json({ success: true, msg: 'meals for period sent',
                                                                            periodmeals: periodmeals, missing: missing });
                                                                    }
                                                            }
                                                        }
                                                    }
                                                });
                                            }
                                        }
                                    } 
                                     else { 
                                        let totalInfo = {
                                            energy: 0, proteins: 0, carbohydrates: 0,
                                            sugar: 0, fat: 0, saturated: 0, monounsaturated: 0
                                        };
                                        res.json({ success: false, msg: 'Something went wrong.' })
                                    }
                                    }
                                }
                            });
                    }
                    
                }
            }
        });
    }
});

// prepare array of dates for which we want to get info
// today not included in dates which are sent 
let calculateDates = (period, username) => {
    let dates = [];
    let monthsAfter31 = [1, 3, 5, 7, 8, 10];
    let monthsAfter30 = [4, 6, 9, 11];
    let day = (new Date()).getDay();
    let date = (new Date()).getDate();
    let month = (new Date()).getMonth();
    let year = (new Date()).getFullYear();
    let numberOfDays;
    if(period == '3days') {
      numberOfDays = 3;
    }
    else if(period == 'week') {
        if(day == 0) {
            numberOfDays = 6;
        }
        else {
            numberOfDays = day;
        }
    }
    else if(period == 'month') {
      numberOfDays = date-1; // without today and without last day of month before this
    }
    
    let count = 1;
    while(count <= numberOfDays) {
      if(date == 1) {
        if(monthsAfter31.includes(month)) {
          date = 31;
          month = month - 1;
        }
        else if(monthsAfter30.includes(month)) {
          date = 30;
          month = month - 1;
        }
        else if(month == 2) {
          date = 28;
          month = month - 1;
        }
        else if(month == 0) {
          date = 31;
          month = 11;
          year = year - 1;
        }
      }
      else {
        date = date - 1;
      }
      let month1 = month+1; // with this +1 I get correct date
      dates.push(dateToString(new Date(month1+' '+date+','+year+' 02:00:00')));
      count++;
    }
    if(numberOfDays != undefined) {
        return dates;
    }
    ///
  }


  // convert date to string in form of dd-mm-yyyy (adding one to
  // month to get real month, because of zero-based months in JS)
  let dateToString = (date) => {
    let d = date.getDate();
    let m = date.getMonth() + 1; 
    let y = date.getFullYear();
    if(d<=9) {
      d = "0"+d;
    }
    if(m<=9) {
      m = "0"+m; 
    }
    let dateString = d+"-"+m+"-"+y;
    return dateString; 
  }

  // remove meal document(delete whole document from collection, for date passed)
  router.delete('/removeMeal/:date', (req, res) => {
    if(!req.params.date) {
        res.json({ success: false, msg: 'Provide date to remove meal from collection' })
    }
    else {
        User.findOne({ _id: req.decoded.userId }, (err, user) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!user) {
                    res.json({ success: false, msg: 'User not found' })
                }
                else {
                    Meals.findOne({ username: user.username, date: req.params.date }, (err, meal) => {
                        if(err) {
                            res.json({ success: false, msg: err });
                        }
                        else {
                            if(!meal) {
                                res.json({ success: false, msg: 'No meals for date: '+req.params.date });
                            }
                            else {
                                meal.remove((err) => {
                                    if(err) {
                                        res.json({ success: false, msg: err });
                                    }
                                    else {
                                        res.json({ success: true, msg: 'Meal for date: '+req.params.date+' successfully deleted!' });
                                    }
                                })
                            }
                        }
                    }); 
                }
            }
        });
    }
  });

  // search groceries by food name
  router.get('/searchGroceriesByName/:foodName', (req, res) => {
    if(!req.params.foodName) {
        res.json({ success: false, msg: 'Please provide food name' });
    }
    else {
        Grocerie.findOne({ food: req.params.foodName }, (err, grocerie) => {
            if(err) {
                res.json({ success: false, msg: err });
            }
            else {
                if(!grocerie) {
                    res.json({ success: false, msg: 'Food not found' });
                }
                else {
                    res.json({ success: true, grocerie: grocerie });
                }
            }
        });
    }
  });

    let compareDate = (a, b) => {
        let aMonth = a.date.slice(3,5);
        let bMonth = b.date.slice(3,5);
        let aDay = a.date.slice(0,2);
        let bDay = b.date.slice(0,2); 
        if(aMonth<bMonth) {
            return 1;
        }
        if(aMonth>bMonth) {
            return -1;
        }
        // comes to here only if aMonth == bMonth
        if(aDay<bDay) {
            return 1;
        }
        if(aDay>bDay) {
            return -1;
        }
        return 0;
    }

    let compareDateMiss = (a, b) => {
        let aMonth = a.slice(3,5);
        let bMonth = b.slice(3,5);
        let aDay = a.slice(0,2);
        let bDay = b.slice(0,2); 
        if(aMonth<bMonth) {
            return 1;
        }
        if(aMonth>bMonth) {
            return -1;
        }
        // comes to here only if aMonth == bMonth
        if(aDay<bDay) {
            return 1;
        }
        if(aDay>bDay) {
            return -1;
        }
        return 0;
    }

// all (count)
router.get('/getAll', (req, res) => {
    let dates; let promAll = []; let toReturn;
    let prom = User.findOne({ _id: req.decoded.userId }).exec();
    prom.then(user => {
        let mealsProm = Meals.find({ username: user.username }).exec();
        mealsProm.then(meals => {
            dates = meals.map(meal => meal.date);
            res.json({ success: true, dates: dates })
        })
        .catch(err => console.log(err));
    })
        .catch(err => console.log(err));
});

module.exports = router;