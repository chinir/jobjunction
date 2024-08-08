const express = require('express');
const router = express.Router();
const Bookings = require('../models/bookings');

// Define route to get all bookings
router.get('/', async (req, res) => {
  try {
    const data = await Bookings.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
