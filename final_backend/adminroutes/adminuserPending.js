const express = require('express');
const router = express.Router();
const userPending = require('../models/userPending');

// Define route to get all userPending
router.get('/', async (req, res) => {
  try {
    const data = await userPending.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
