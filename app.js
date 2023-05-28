const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

const shopsList = require('./routes/api/shopsList');
const history = require('./routes/api/history');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/eliftech/api/shopsList', shopsList);
app.use('/eliftech/api/history', history);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server Error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
