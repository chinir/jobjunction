const express = require('express');
const router = express.Router();
const userincompleted = require('../models/userincompleted');

// Define route to get all userincompleted
router.get('/', async (req, res) => {
  try {
    const data = await userincompleted.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
