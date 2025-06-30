const express = require('express');
const config = require('./config/env');
const configureServer = require('./config/server');
const connectDB = require('./config/db');

const app = express();

// Configuración del servidor
configureServer(app);

// Conexión a la base de datos
connectDB();

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando!');
});

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});