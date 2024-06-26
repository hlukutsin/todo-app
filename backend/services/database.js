const MongoClient = require('mongodb').MongoClient;

const dburl = require('../const/index.const');

class Database {
  constructor() {
    this.db = null;
  }

  connectToBase = async () => {
    try {
      const client = await MongoClient.connect('mongodb://mongo:27017', { useNewUrlParser: true, useUnifiedTopology: true });
      this.db = client.db('todos');
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err);
    }
  };
}

const dataBase = new Database();

module.exports = dataBase;
