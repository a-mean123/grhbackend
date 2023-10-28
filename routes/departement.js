const express = require('express');
const { createDepartement, getAllDepartements, getDepartementById, updateDepartement, deleteDepartement } = require('../controllers/departement');

const router = express.Router();

//ajout Departement 
router.post('/ajout', createDepartement);

//get Departement
router.get('/all', getAllDepartements)

//get Departement by id
router.get('/getbyid/:id', getDepartementById)

//update Departement
router.put('/update/:id', updateDepartement);

//delete Departement
router.delete('/supprimer/:id', deleteDepartement);


module.exports = router;