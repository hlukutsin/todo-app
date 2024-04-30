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
    console.log(req);
    const body = req.body

    if ((body.name !== undefined && body.text !== undefined){

    }
    // const todosList = await todos.getTodosList();
    // res.send(todosList);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
