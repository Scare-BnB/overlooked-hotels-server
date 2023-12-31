// import express library
const express = require('express');
// import eors package
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
    response.json({  
    });
});

const AccommodationRouter = require('./controllers/AccommodationController');
app.use('/locations', AccommodationRouter);

const ReviewRouter = require('./controllers/ReviewController');
app.use('/reviews', ReviewRouter);

const UserRouter = require('./controllers/UserController');
app.use('/users', UserRouter);

const BookingRouter = require('./controllers/BookingController');
app.use('/bookings', BookingRouter);

module.exports = {
    app
}