'use strict';

const express = require('express');
const router = express.Router();

const models = require('../db/models');
const Analogy = models.Analogy;

router.get('/analogies', function (req, res, next) {
  Analogy.findAll({})
  .then(analogies => res.json(analogies))
  .catch(next);
});

router.get('/:id', function (req, res, next) {
  Analogy.findById(id)
  .then(analogy => {
    if (!analogy) {
      const err = Error('analogy not found');
      err.status = 404;
      throw err;
    }
    req.analogy = analogy;
    next();
    return null;
  })
  .catch(next);
});

router.post('/analogies', function(req, res, next) {
  Analogy.create(req.body)
  .then(createdAnalogy => res.status(201).json(createdAnalogy))
  .catch(next);
});


module.exports=router;