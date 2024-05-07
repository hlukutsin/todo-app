const express = require('express');
const router = express.Router();

const dataBase = require('../services/database');
const todos = require('../repositories/todos');

router.get('/', async (req, res) => {
  try {
    const todosList = await todos.getTodosList();
    res.send(todosList);
  } catch (e) {
    console.error(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const body = req.body;

    if (body.name !== undefined && body.text !== undefined){
      const todosList = await todos.addTodo({name: body.name, text: body.text});
      res.send(todosList);
    }

  } catch (e) {
    console.error(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;

    if (id){
      const todo = await todos.getTodo(id);
      res.send(todo);
    }

  } catch (e) {
    console.error(e);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    if (id){
      const todo = await todos.updateTodo(id,body);
      res.send(todo);
    }

  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
