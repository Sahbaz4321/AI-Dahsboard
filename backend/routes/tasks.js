const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET api/tasks
// @desc    Get all tasks for logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const { sortBy = 'createdAt', order = 'desc' } = req.query;
    
    // Valid sort fields
    const validSortFields = ['createdAt', 'updatedAt', 'title', 'priority', 'completed'];
    const sortField = validSortFields.includes(sortBy) ? sortBy : 'createdAt';
    const sortOrder = order === 'asc' ? 1 : -1;

    const tasks = await Task.find({ user: req.user.id })
      .sort({ [sortField]: sortOrder });

    res.json(tasks);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/tasks
// @desc    Create a task
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const task = new Task({
      title,
      description,
      priority,
      user: req.user.id
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/tasks/:id
// @desc    Update a task
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, completed, priority } = req.body;

    let task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Update task
    task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed, priority },
      { new: true }
    );

    res.json(task);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/tasks/:id
// @desc    Delete a task
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task removed' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;