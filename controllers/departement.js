const Departement = require('../models/departement');


const createDepartement = async (req, res) => {

    try {

        let departement = new Departement(req.body);
        let result = await departement.save();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getAllDepartements = async (req, res) => {

    try {

        let result = await Departement.find();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getDepartementById = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Departement.findById({ _id: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const deleteDepartement = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Departement.findByIdAndDelete({ _id: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const updateDepartement = async (req, res) => {

    try {
        
        let id = req.params.id;
        let data = req.body;
        let result = await Departement.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send(result);
        
    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = {
    createDepartement,
    getAllDepartements,
    getDepartementById,
    deleteDepartement,
    updateDepartement
}