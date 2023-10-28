const express = require('express');
const { createProjet, getAllProjets, getProjetById, updateProjet, deleteProjet, getProjetByDep, getProjetByClient } = require('../controllers/projet');

const router = express.Router();

//ajout Projet 
router.post('/ajout', createProjet);

//get Projet
router.get('/all', getAllProjets)

//get Projet by id
router.get('/getbyid/:id', getProjetById)

//get Projet by dep
router.get('/getbydep/:id', getProjetByDep)

//get Projet by client
router.get('/getbyclient/:id', getProjetByClient)

//update Projet
router.put('/update/:id', updateProjet);

//delete Projet
router.delete('/supprimer/:id', deleteProjet);


module.exports = router;