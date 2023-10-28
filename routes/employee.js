const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();

const { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee, getEmployeeByDep } = require('../controllers/employee');


const multer = require('multer');
let filename = '';
const mystorage = multer.diskStorage(
    {
        destination: './uploads',
        filename: (req, file, redirect) => {

            filename = Date.now() + '.' + file.mimetype.split('/')[1];
            redirect(null, filename);

        }
    }
);
const upload = multer({ storage: mystorage });

//ajout employee 
router.post('/ajout', upload.any('image'), (req, res) => {
  createEmployee(req, res, filename)
});

//get employee
router.get('/all', getAllEmployees)

//get client by id
router.get('/getbyid/:id', getEmployeeById)

//get client by dep
router.get('/getbydep/:id', getEmployeeByDep)

//update employee
router.put('/update/:id', upload.any('image'), (req, res) => {
    updateEmployee(req, res, filename);
});

//delete employee
router.delete('/supprimer/:id', deleteEmployee);

module.exports = router;