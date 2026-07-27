const express = require('express');
const db = require('../db');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// All task routes require a valid token
router.use(authMiddleware);

// GET all tasks for logged-in user
router.get('/', async (req, res) => {
  try {
    const [tasks] = await db.query(
      'SELECT * FROM tasks WHERE user_id = ? ORDER BY created_at DESC',
      [req.userId]
    );
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// CREATE a new task
router.post('/', async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const [result] = await db.query(
      'INSERT INTO tasks (user_id, title, description, status) VALUES (?, ?, ?, ?)',
      [req.userId, title, description || '', status || 'To Do']
    );

    res.status(201).json({
      id: result.insertId,
      user_id: req.userId,
      title,
      description: description || '',
      status: status || 'To Do',
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE a task (edit or change status)
router.put('/:id', async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const { id } = req.params;

    const [existing] = await db.query(
      'SELECT * FROM tasks WHERE id = ? AND user_id = ?',
      [id, req.userId]
    );

    if (existing.length === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await db.query(
      'UPDATE tasks SET title = ?, description = ?, status = ? WHERE id = ? AND user_id = ?',
      [title, description, status, id, req.userId]
    );

    res.json({ id, title, description, status });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      'DELETE FROM tasks WHERE id = ? AND user_id = ?',
      [id, req.userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;