/* 
    Aqui definiremos las rutas que va a tener nuestra API
*/

// ------------------------------------------ REQUIREMENTS ---------------------------------

/*
    - El objeto Router es un enrutador que nos permite guardar dentro rutas/urls. Las que tendra nuestro servidor para hacerle las peticiones
*/
const { Router } = require('express')
const router = Router()

// rutas de la carpeta controles
const employeesCtrl = require('../controllers/employees.controller.js')

// ------------------------------------------ CODIGO ---------------------------------

/* 
    - rutas que tiene nuestra API
    - CRUD --> Create - Read - Update - Delete
    - a esto le precede /api/employees/ creado en app
*/
router.get('/', employeesCtrl.getEmployees)
router.post('/', employeesCtrl.createEmployee)
router.get('/:id', employeesCtrl.getEmployee)
router.put('/:id', employeesCtrl.editEmployee)
router.delete('/:id', employeesCtrl.deleteEmployee)

// exportamos el modulo para poder usarlo en otro lado
module.exports = router
