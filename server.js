const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const bubbleSorter = require('./routes/bubbleRoute');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bubbleSorter',bubbleSort);

module.exports = app;