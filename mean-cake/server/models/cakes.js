const mongoose = require('mongoose');
const {Schema} = mongoose;

const CakeSchema = new Schema({

    name: {type: String, required : true},
    price : {type: Number, required: true},



});

module.exports = mongoose.model('Cake', CakeSchema);