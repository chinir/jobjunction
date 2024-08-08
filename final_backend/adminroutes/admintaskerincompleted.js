const express = require('express');
const router = express.Router();
const taskerincompleted = require('../models/taskerincompleted');

// Define route to get all bookings
router.get('/', async (req, res) => {
  try {
    const data = await taskerincompleted.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
