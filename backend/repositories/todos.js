const { ObjectId } = require('mongodb');

const dataBase = require('../services/database');

class Todos {
  getTodosList = async () => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      return todosCollection.find().toArray();
    } catch (e) {
      console.error('Failed to getting Todos list:', e);
    }
  };

  getTodo = async (id) => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const formattedId = new ObjectId(id);
      return todosCollection.findOne({ _id: formattedId });
    } catch (e) {
      console.error('Failed to getting Todo:', e);
    }
  };

  addTodo = async (data) => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      await todosCollection.insertOne(data);
      return todosCollection.find().toArray();
    } catch (e) {
      console.error('Failed to adding Todo:', e);
    }
  };

  putTodo = async (id, data) => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const formattedId = new ObjectId(id);
      await todosCollection.replaceOne({ _id: formattedId }, data);
      return todosCollection.findOne({ _id: formattedId });
    } catch (e) {
      console.error('Failed to updating Todo:', e);
    }
  };

  patchTodo = async (id, data) => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const formattedId = new ObjectId(id);
      await todosCollection.updateOne({ _id: formattedId }, { $set: data });
      return todosCollection.findOne({ _id: formattedId });
    } catch (e) {
      console.error('Failed to updating Todo:', e);
    }
  };

  deleteTodo = async (id) => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      const formattedId = new ObjectId(id);
      return todosCollection.deleteOne({ _id: formattedId });
    } catch (e) {
      console.error('Failed to deleting Todo:', e);
    }
  };

  deleteAll = async () => {
    try {
      const todosCollection = await dataBase.db.collection('todos');
      return todosCollection.deleteMany();
    } catch (e) {
      console.error('Failed to deleting Todos list:', e);
    }
  };
}

const todos = new Todos();

module.exports = todos;
