require('dotenv').config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/myapp_dev',
  NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = config;