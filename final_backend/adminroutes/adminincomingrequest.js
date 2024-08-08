const express = require('express');
const router = express.Router();
const incomingrequest = require('../models/incomingrequest');

// Define route to get all bookings
router.get('/', async (req, res) => {
  try {
    const data = await incomingrequest.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
