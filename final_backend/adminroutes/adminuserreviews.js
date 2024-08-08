const express = require('express');
const router = express.Router();
const userreviews = require('../models/userreviews');

// Define route to get all userreviews
router.get('/', async (req, res) => {
  try {
    const data = await userreviews.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
