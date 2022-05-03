/*
    schema - es lo que nososteos queremos guardar
    model - es lo que vamos a utilizar para poder buscar/eliminar/actualizar
*/
const { Schema, model } = require('mongoose')

// creamos el esquema con la estructura de datos que queremos guardar
const employeeSchema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
  },
  {
    timestamps: true, // cuando creamos un nuevo dato le añade la fecha y hora en la que fue creada
    versionKey: false // evitar que añada el campo "__v"
  }
)

// creamos y exportamos un modelo con la funcion "model" y cogiendo como plantilla el Schema que hemos creado para el empleado
module.exports = model('Employee', employeeSchema)
