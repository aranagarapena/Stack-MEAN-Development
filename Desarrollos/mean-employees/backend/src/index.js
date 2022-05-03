// ------------ ARCHIVO INICIAL PARA ARRANCAR PROYECTO -----------

// archivo principal de nuestro proyecto para arrancar el servidor
console.log('Servidor Iniciado')

// ------------------------------------------ REQUIREMENTS ---------------------------------

// requerimos el archivo para poder conectarnos a la BD
require('./database')
// importamos el modulo que hemos programado en la carpeta app para arrancar el servidor
const app = require('./app')

// ------------------------------------------ CODIGO ---------------------------------

// listener para que escuche las peticiones en el puerto que le decimos. En esta caso coge el atributo 'port' de la variable app
app.listen(app.get('port'))
console.log('Servidor corriendo en el puerto', app.get('port'))
