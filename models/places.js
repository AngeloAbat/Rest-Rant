const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: string,
    cuisines: {type: String, required: true},
    city: {type: String, default: `Uknown`},
    state: {type: String, default: `USA`},
    founded: Number
});

module.exports = mongoose.model('Place', placeSchema);