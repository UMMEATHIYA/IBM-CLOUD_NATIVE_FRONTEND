const Joi = require('joi');
const courses = require('./routes/courses');
const home = require('./routes/home');
const todos=require('./routes/todo');
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); // default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/courses', courses);
app.use('/api/todos',todos);
app.use('/', home);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));