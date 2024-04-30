const dataBase = require('../services/database');

class Todos {
  getTodosList = async () => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const todos = await todosCollection.find().toArray();

      return todos;
    } catch (e) {
      console.error('Failed to getting Todos list:', e);
    }
  };

  addTodo = async () => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const todos = await todosCollection.find().toArray();

      return todos;
    } catch (e) {
      console.error('Failed to getting Todos list:', e);
    }
  };
}

module.exports = Todos;
