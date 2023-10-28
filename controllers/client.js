const Client = require('../models/client');

const createClient = async (req, res, filename) => {

    try {

        let client = new Client({
            ...req.body,
            image: filename
        });
        let savedClient = await client.save();
        res.status(200).send(savedClient);

    } catch (error) {
        res.status(400).send(error);
    }

}




const getAllClients = async (req, res) => {

    try {
        let result = await Client.find();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}




const getClientById = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Client.findById({ _id: id });

        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const deleteClient = async (req, res) => {

    try {

        let id = req.params.id;
        const deletedClient = await Client.findByIdAndDelete({ _id: id });
        res.status(200).send(deletedClient);

    } catch (error) {
        res.status(400).send(error);
    }

}

const updateClient = async (req, res, fileName) => {

    try {
        
        let id = req.params.id;
        let data = req.body;
        if(fileName.length>0){
            data.image = fileName;
        }
 
        let result = await Client.findByIdAndUpdate( { _id: id }, data );
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}




module.exports = {
    createClient,
    getAllClients,
    getClientById,
    deleteClient,
    updateClient,
}