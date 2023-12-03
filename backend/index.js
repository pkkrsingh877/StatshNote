const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(morgan('dev'));
app.use(methodOverride());

// Database setup

const databaseSetup = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/notesapp');
        console.log('DB Connection Successful');
    } catch (error) {
        console.log(error);
        console.log('DB Connection Failed!');
    }
}

databaseSetup();


app.listen(process.env.PORT, () => {
    console.log('App is listening at port ', process.env.PORT);
});