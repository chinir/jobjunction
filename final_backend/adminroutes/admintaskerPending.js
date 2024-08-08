const express = require('express');
const router = express.Router();
const taskerPending = require('../models/taskerPending');

// Define route to get all bookings
router.get('/', async (req, res) => {
  try {
    const data = await taskerPending.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
