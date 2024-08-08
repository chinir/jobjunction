const express = require('express');
const router = express.Router();
const userconfirm = require('../models/userconfirm');

// Define route to get all userconfirm
router.get('/', async (req, res) => {
  try {
    const data = await userconfirm.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
