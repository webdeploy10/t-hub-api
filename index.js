const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true})); 


app.use(cors());
const uri = process.env.ATLAS_URI;
        mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});
        const connection = mongoose.connection;
        connection.once('open', ()=>{
            console.log("MongoDB Connection stablished successfully");

        })

const comentRouter = require('./routes/coment');

app.use('/coment', comentRouter);

app.listen(port, () =>{
    console.log(`Server running on port: ${port}`);
});