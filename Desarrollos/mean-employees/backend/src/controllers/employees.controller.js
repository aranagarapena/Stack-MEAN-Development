// creamos un objeto
const employeesCtrl = {}

// requerimos el modulo que hemos creado en la BD
const Employee = require('../models/Employee')

/*
  Funcion para obtener todos los empleados de la BD
*/
employeesCtrl.getEmployees = async (req, res) => {
  // array de empleados recogidos de manera asincrona de la BD, para ello usamos "async" y "await"
  const employees = await Employee.find()
  res.json(employees)

  //
  //res.send({ message: 'Todos los Empleados Obtenidos' })
}

/*
  Funcion para crear un empleado en la BD
*/
employeesCtrl.createEmployee = async (req, res) => {
  // recibimos los valores que queremos crear en la BD a traves de "req" body
  const newEmployee = new Employee(req.body) // creamos el empleado

  await newEmployee.save() // guardamos el empleado. Usamos await/sync porque save() es un metodo asincrono

  // mandamos un mensaje diciendo que hemos creado el usuario
  console.log('Empleado creado y guardado con exito', newEmployee)
  res.send({ message: 'Empleado creado y guardado con exito' })
}

/*
  Funcion para obtener un empleado de la BD
*/
employeesCtrl.getEmployee = async (req, res) => {
  // mostramos por consola lo que recibe la petición por parametro
  const employee = await Employee.findById(req.params.id)
  //res.send({ message: 'Empleado obtenido' })
  res.send(employee)
  console.log('Empleado obtenido: ', employee)
}

/*
  Funcion para actualizar los datos de un empleado de la BD
*/
employeesCtrl.editEmployee = async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.json('Empleado editado')
  console.log('Empleado editado', req.params.id)
}

/*
  Funcion para eliminar un empleado de la BD
*/
employeesCtrl.deleteEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id)
  res.json({ status: 'Empleado borrado', empleado: employee })
  console.log('Empleado borrado', req.params.id)
}

module.exports = employeesCtrl
