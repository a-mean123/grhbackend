const mongoose=require('mongoose');
let objectId = require('mongodb').ObjectId;
let Projet = mongoose.model(
    'Projet',
    {
        titre:String,
        description:String,
        budget:Number,
        etat:{
            type: String,
            default: 'en attente'
        },
        idClient:objectId,
        idDep:objectId,
    }
)



module.exports=Projet;