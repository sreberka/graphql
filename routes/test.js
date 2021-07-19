const express = require('express');

const router = express.Router();
const productsService = require('../services/tours');

router.get('/test', (req, res) => {
  productsService.getAllTours().then(function(data) {
    console.log(data);
    res.send(data);
    res.status(200).render('overview', {
      title: 'All Tours',
      tours: data
    });
  });
});

module.exports = router;
