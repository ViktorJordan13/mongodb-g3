const mongoose = require ("mongoose");

const addressSchema = mongoose.Schema({
    street: String,
    city: String
});

//schema defines the body of the document
const userSchema = mongoose.Schema({
    //ObjectId e unikatno i random generirano za sekoe entry
    name: String,
    age: Number,
    email: String,
    createdAt: { 
        type: Date,
        immutable: true, //ni ovozmozuva da ne go promenime poleto createdAt pri update ili druga operacija
        default: () => Date.now() // ja zema momentalnata data
    }, //date in the moment of creation
    updatedAt: {
        type: Date,
        immutable: true, 
        default: () => Date.now()
    }, //date in the moment of updating
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User,"
    },
    hobbies: [String],
    address: addressSchema
});

const User = mongoose.model("User", userSchema, "user");

//CRUD funkcionalnost za MongoDB

const findUsers = async() => {
    return await User.find({});
};

const create = async (data) => {
    //req.body
    const user = new User(data);
    return await user.save();
};

const update = async (id, data) => {
    //const newData = {
        //name: "Viktor New Accout"
    //}
    return await User.updateOne({_id: id}, data);
};

const remove = async (id) => {

    return await User.deleteOne({ _id: id})
};

const getAllSortedByName = async () => {
    return await User.find({}).sort({ name: -1})
}

const getById = async (id) => {
    return await User.findOne({_id: id});
}

const getByEmail = async (email) => {
    return await User.findOne ({email: email})
}

module.exports = {
    findUsers,
    getAllSortedByName,
    getById,
    getByEmail,
    create,
    update,
    remove,
}
