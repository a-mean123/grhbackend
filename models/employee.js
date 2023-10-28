const mongoose=require('mongoose');
let objectId = require('mongodb').ObjectId;
let Employee = mongoose.model(
    'Employee',
    {
        nom:String,
        prenom:String,
        image:String,
        tel:String,
        email:String,
        cin:String,
        idDep:objectId,
    }
)


module.exports=Employee;