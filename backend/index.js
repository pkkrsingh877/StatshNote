const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

// Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow credentials (cookies)
}));

// Middleware
const verifyUser = require('./middlewares/verifyUser');

// Files for Route Handlers
const notesRoutes = require('./routes/notes');
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/users');

// Middleware for Routes
app.use('/notes', verifyUser, notesRoutes);
app.use('/auth', authRoutes);
// app.use('/user', userRoutes);

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