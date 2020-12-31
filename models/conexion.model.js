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
const conexionSchema = new Schema({
    remote_ip: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 3
    },
}, {
    timestamps: true,
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
const Conexion = mongoose.model('Conexion', conexionSchema);

module.exports = Conexion;