const express = require('express');
const router = express.Router();
const bubbleSort = require('../bubbleSort.js');


router.route('/')

  .get((req, res) =>{
    let sortedArray = bubbleSort();
    res.render('../views/layouts/app.hbs', sortedArray);
  });