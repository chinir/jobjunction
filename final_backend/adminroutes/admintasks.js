const express = require('express');
const router = express.Router();
const Tasks = require('../models/tasks');

// Define route to get all tasks
router.get('/', async (req, res) => {
  try {
    const data = await Tasks.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/update', async (req, res) => {
  const { _id,category,task,price} = req.body
  try {
    const data = await Tasks.findOne({_id:_id});
    data.category = category
    data.task = task
    data.price = price
    await data.save()
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/addtask", async (req, res) => {
  try {
    const { category, task, price } = req.body;

    let tasks = await Tasks.findOne({ task });
    if (tasks) {
      return res.status(400).json({ message: "Task already exists" });
    }
    tasks = new Tasks({
      category,
      task,
      price,
    });
    await tasks.save();
    res.status(200).json({ message: "Tasks created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
