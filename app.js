/*
 *
 * Citrine Full Stack Take-home Challenge
 *
 */

const express = require('express');
const convertUnits = require('./convertUnits');

// Creates express http server
const app = express();

// Format result from convertUnits
function formatResult(result) {
  const sigDigitsString = result.multiplication_factor.toPrecision(14); // returns a string
  const sigDigitsFloat = parseFloat(sigDigitsString);
  return {
    unit_name: result.unit_name,
    multiplication_factor: sigDigitsFloat,
  };
}

// Accepts GET requests at /units/si endpoint
app.get('/units/si', (req, res) => {
  // parse query params
  const { query: { units } } = req;

  if (units) {
    const result = convertUnits(decodeURI(units));

    if (result) {
      res.status(200).json(formatResult(result));
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
});

module.exports = app;
