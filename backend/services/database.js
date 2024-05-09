const MongoClient = require('mongodb').MongoClient;

const dburl = require('../const/index.const');

class Database {
  constructor() {
    this.db = null;
  }

  connectToBase = async () => {
    try {
      const client = await MongoClient.connect(dburl);
      this.db = client.db('todos');
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Failed to connect to MongoDB:', err);
    }
  };
}

const dataBase = new Database();

module.exports = dataBase;
