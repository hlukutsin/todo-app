const express = require('express');
const router = express.Router();

const dataBase = require('../services/database');
const todos = require('../services/todos');

router.get('/', async (req, res) => {
  try {
    const todosList = await todos.getTodosList();
    res.send(todosList);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
