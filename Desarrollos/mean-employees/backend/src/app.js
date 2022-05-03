// Descripcion: archivo para arrancar el servidor

// ------------------------------------------ REQUIREMENTS ---------------------------------

// modulo para poder crear nuestro servidor
const express = require('express')
const morgan = require('morgan')

// ------------------------------------------ CODIGO ---------------------------------

// variable para poder manipular el servidor
const app = express()

/* 
    -Creamos un atributo en app para establecer en que puerto queremos que escuche
        -en este caso le decimos que si existe un puerto definido por defecto en las variables de entorno para hacer esto lo coja, 
        si no que coja el 4000
*/
app.set('port', process.env.PORT || 4000)

// escucha las peticiones que van llegando al servidor y las pinta por consola
app.use(morgan('dev'))

// le indicamos a express que queremos que interprete JSONs y Fomularios HTML
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// cada ve que se pida una ruta que empiza por '/api/employees' (prefijo) va a usar las rutas guardadas en employees.router
app.use('/api/employees', require('./routes/employees.router'))

// exportamos el modulo para poder usarlo desde otro lado
module.exports = app
