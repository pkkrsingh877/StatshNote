const express = require('express');
const app = express();
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log('App is listening at port ', process.env.PORT);
});