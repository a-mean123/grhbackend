const mongoose=require('mongoose');
let Departement = mongoose.model(
    'Departement',
    {
        nom:String,
        description:String,
        etage:String,
        salle:String,
    }
)


module.exports=Departement;