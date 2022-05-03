const mongoose = require('mongoose')

// mongoose nos crea la BD mean-employees
mongoose
  .connect('mongodb://localhost/mean-employees') // me conecto
  .then(db => console.log('Conectado a MongoDB')) // si se conecta muestro esto
  .catch(err => console.log('NO se ha podido conectar a MongoDB', err)) // si no se puede conectar muestro el error
