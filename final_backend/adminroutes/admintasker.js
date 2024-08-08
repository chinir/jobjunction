const express = require('express');
const router = express.Router();
const Tasker = require('../models/tasker');


// Define route to get all bookings
router.get('/', async (req, res) => {
  try {
    const data = await Tasker.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/update/:id', async (req, res) => {
  const taskId = req.params.id;
  const { area, task, phone } = req.body;

  try {
    const tasker = await Tasker.findById(taskId);

    if (!tasker) {
      return res.status(404).json({ message: 'Tasker not found' });
    }

    tasker.area = area;
    tasker.task = task;
    tasker.phone = phone;

    await tasker.save();

    res.status(200).json(tasker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
