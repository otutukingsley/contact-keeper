const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');



const connectDB = async () => {
  try {
  await mongoose.connect(db)
  console.log('MongoDB connection established')
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = connectDB;