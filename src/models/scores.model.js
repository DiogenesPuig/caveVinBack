const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  drink: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Drink',
    required: true
  },
  puntuacion: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    validate: {
      validator: Number.isInteger,
      message: 'La puntuación debe ser un entero entre 1 y 5'
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Índice único para evitar múltiples valoraciones por usuario
scoresSchema.index({ user: 1, drink: 1 }, { unique: true });

module.exports = mongoose.model('Score', scoresSchema);