const mongoose=require('mongoose');
let Client = mongoose.model(
    'Client',
    {
        nom:String,
        prenom:String,
        cin:String,
        tel:String,
        email:String,
        image:String,
    }
)


module.exports=Client;