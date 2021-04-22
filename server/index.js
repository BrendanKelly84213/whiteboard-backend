const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

const db = require('./db');
const taskRouter = require('./routes/task_rtr');
const filterRouter = require('./routes/filter_rtr');
const shiftRouter = require('./routes/shift_rtr');
const authRouter = require('./routes/auth_rtr');

const app = express(); 

app.use(cors());
app.use(compression());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'mongo connection error'));

app.use('/tasks', taskRouter);
app.use('/filters', filterRouter);
app.use('/shifts', shiftRouter);
app.use('/auth', authRouter);

app.listen(3001, () => console.log('server online'));
