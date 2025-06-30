const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const configureServer = (app) => {
  // Body parser
  app.use(express.json({ limit: '10kb' }));
  
  // Security middleware
  app.use(helmet());
  app.use(cors());
  
  // Logging
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
};

module.exports = configureServer;