const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 8000;

const connectDB = require('./connect/database');

const { errorHandler } = require('./middleware/errorMiddleware');
constDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tasks', require('./routes/taskRoutes'));

