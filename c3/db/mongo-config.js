const mongoose = require("mongoose");

//URI - Uniform Resource Identifier
const uri = 
    "mongodb+srv://viktorj560:1234@mongodb-g3.evm2fxk.mongodb.net/users?retryWrites=true&w=majority";

async function connect(){
    try{
        await mongoose.connect(uri)
    }catch(err){
        console.log(err.message);
    }
}

connect();