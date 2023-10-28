const Employee = require('../models/employee');

const createEmployee = async (req, res, fileName) => {

    try {

        let employee = new Employee({
            ...req.body,
            image: fileName
        });
        let savedEmployee = await employee.save();
        res.status(200).send(savedEmployee);

    } catch (error) {
        res.status(400).send(error);
    }

}




const getAllEmployees = async (req, res) => {

    try {
        let result = await Employee.aggregate([
            {
                $lookup: {
                    from: 'departements',
                    localField: 'idDep',
                    foreignField: '_id',
                    as: 'departement'
                }
            }
        ])
        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const getEmployeeByDep = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Employee.findById({ idDep: id });

        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}



const getEmployeeById = async (req, res) => {

    try {

        let id = req.params.id;
        let result = await Employee.findById({ _id: id });

        res.status(200).send(result);

    } catch (error) {
        res.status(400).send(error);
    }

}

const deleteEmployee = async (req, res) => {

    try {

        let id = req.params.id;
        const deletedEmployee = await Employee.findByIdAndDelete({ _id: id });
        res.status(200).send(deletedEmployee);

    } catch (error) {
        res.status(400).send(error);
    }

}

const updateEmployee = async (req, res, fileName) => {

    try {
        
        let id = req.params.id;
        let data = req.body;
        if(fileName.length>0){
            data.image = fileName;
        }
 
        let result = await Employee.findByIdAndUpdate( { _id: id }, data );
        res.status(200).send(result);

    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

}




module.exports = {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    deleteEmployee,
    updateEmployee,
    getEmployeeByDep
}