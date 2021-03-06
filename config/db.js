const mongoose = require('mongoose');
const chalk = require('chalk');
const keys = require('./keys');

const connectDB = async function() {
  try {
    await mongoose.connect(keys.mongoUri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log(chalk.red(error.message));
    process.exit(1);
  }
};

module.exports = connectDB;
