const { Schema } = require("mongoose");

const mongoose = require('mongoose');

const schema = mongoose.Schema;


const answerSchema = new Schema({
    question:{
        type: String,
        required: true,
        unique: false, 
        trim: false,
    },
    video_name: {
        type: String,
        required: true,
        unique: false, 
        trim: false,
        minlength: 3
    },
    video_link: {
        type: String,
        required: true,
        unique: false, 
        trim: false,
    },
    video_description: {
        type: String,
        required: true,
        unique: false, 
        trim: false,
    }

},{
    timestamps:true,
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;