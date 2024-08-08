const express = require('express');
const router = express.Router();
const usercancel = require('../models/usercancel');

// Define route to get all usercancel
router.get('/', async (req, res) => {
  try {
    const data = await usercancel.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
