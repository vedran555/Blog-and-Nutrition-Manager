const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const grocerieSchema = new Schema({
    food: { type: String },
    energy: { type: Number },
    proteins: { type: Number },
    carbohydrates: { type: Number },
    sugar: { type: Number },
    fat: { type: Number },
    saturated: { type: Number },
    monounsaturated: { type: Number }
});

const Grocerie = module.exports = mongoose.model('grocerie', grocerieSchema);