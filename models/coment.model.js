const { Schema } = require("mongoose");

const mongoose = require('mongoose');

const schema = mongoose.Schema;
/*
var CounterSchema = schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counter = mongoose.model('counter', CounterSchema);
*/
const comentSchema = new Schema({
    comenter_name: {
        type: String,
        required: true,
        unique: false, 
        trim: false,
        minlength: 3
    },
    comenter_email: {
        type: String,
        required: true,
        unique: false, 
        trim: false,
        minlength: 11
    }, 
    coment:{
        type: String,
        required: true,
        unique: false, 
        trim: false,
        minlength: 11
    }

},{
    timestamps:true,
});
/*
comentSchema.pre('save', function(next) {
    var doc = this;
    counter.findByIdAndUpdate({_id: 'coment_id'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.coment_id = counter.seq;
        next();
    });
});
*/
const Coment = mongoose.model('Coment', comentSchema);

module.exports = Coment;