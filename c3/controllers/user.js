const {
    findUsers,
    getAllSortedByName,
    getById,
    getByEmail,
    create,
    update,
    remove,
} = require ("../models/user");

const getAllUsers = async(req, res) => {
    try{
        const users = await findUsers();
        return res.status(200).send(users);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const getSortedByName = async(req, res) => {
    try{
        const users = await getAllSortedByName();
        return res.status(200).send(users);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

//user/:id
const getOneUser = async(req, res) => {
    try{
        const user = await getById(req.params.id);
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

//user/:email
const getUserByEmail = async(req, res) => {
    try{
        const user = await getByEmail(req.params.email);
        return res.status(200).send(user);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

//users/:id
const createUser = async(req, res) => {
    try{
        await create(req.body);
        return res.status(201).send(req.body);
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

const updateUser = async(req, res) => {
    try{
        await update(req.params.id, req.body);
        return res.status(204).send(""); //Success but no entity body - update existing document
    }catch(err){
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

};

const removeUser = async(req, res) => {
    try{
        await remove(req.params.id);
        return res.status(204).send("");
    }catch{err}{
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }

};

module.exports = {
    getAllUsers,
    getSortedByName,
    getOneUser,
    getUserByEmail,
    createUser,
    updateUser,
    removeUser
};
