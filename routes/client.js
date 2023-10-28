const express = require('express');

const router = express.Router();
const multer = require('multer');

const { deleteClient, updateClient, getClientById, getAllClients, createClient } = require('../controllers/client');

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

//ajout client 
router.post('/ajout', upload.any('image'), (req, res) => {
  createClient(req, res, filename)
});
//get clients
router.get('/all', getAllClients)
//get client by id
router.get('/getbyid/:id', getClientById)

//update client
router.put('/update/:id', upload.any('image'), (req, res) => {
    updateClient(req, res, filename);
});

//delete client
router.delete('/supprimer/:id', deleteClient);


module.exports = router;