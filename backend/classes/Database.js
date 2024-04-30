const MongoClient = require('mongodb').MongoClient;

const dburl = require('../const/index.const');

class Database {
  constructor() {
    this.db = null;
  }

  connectToBase = async () => {
    // const dburl = 'mongodb://127.0.0.1';
    // const client =  MongoClient;

    try {
      const client = await MongoClient.connect(dburl);
      const todosDB = client.db('todos');
      this.db = todosDB;
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err);
    }
  };
}

module.exports = Database;
