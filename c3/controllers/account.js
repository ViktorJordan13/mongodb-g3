const {
    findAccounts,
    create,
    update,
    remove
} = require ("../models/account")

const getAccounts = async(req, res) => {
    try{
        const accounts = await findAccounts();
        return res.status(200).send(accounts);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const createAccount = async(req, res) => {
    try{
        await create(req.body); //JSON od POSTMAN
        return res.status(201).send(req.body); //Success and created resource
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const updateAccount = async(req, res) => {
    try{
        await update(req.params.id, req.body);
        return res.status(204).send(""); //Success but no entity body - update existing document
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

};

const removeAccount = async(req, res) => {
    try{
        await remove(req.params.id);
        return res.status(204).send("");
    }catch{err}{
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

};

module.exports = {
    getAccounts,
    createAccount,
    updateAccount,
    removeAccount,
};