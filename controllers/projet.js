const Projet = require('../models/projet');


const createProjet = async (req, res) => {

    try {

        let projet = new Projet(req.body);
        let result = await projet.save();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getAllProjets = async (req, res) => {

    try {

        let result = await Projet.find();
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getProjetByClient = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Projet.find({ idClient: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getProjetByDep = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Projet.find({ idDep: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getProjetById = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Projet.findById({ _id: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const deleteProjet = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Projet.findByIdAndDelete({ _id: id });
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const updateProjet = async (req, res) => {

    try {
        
        let id = req.params.id;
        let data = req.body;
        let result = await Projet.findByIdAndUpdate({ _id: id }, data);
        res.status(200).send(result);
        
    } catch (error) {
        res.status(400).send(error);
    }

}

module.exports = {
    createProjet,
    getAllProjets,
    getProjetById,
    deleteProjet,
    updateProjet,
    getProjetByClient,
    getProjetByDep
}