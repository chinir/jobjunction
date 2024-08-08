const express = require('express');
const router = express.Router();
const user = require('../models/user');

// Define route to get all user
router.get('/', async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/update/:id', async (req, res) => {
  const userId = req.params.id;
  const { phone, area } = req.body;

  try {
    const user1 = await user.findById(userId);

    if (!user1) {
      return res.status(404).json({ message: 'User not found' });
    }

    user1.phone = phone;
    user1.area = area;

    await user1.save();

    res.status(200).json(user1);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
