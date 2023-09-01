const mongoose = require ("mongoose");

const accountSchema = mongoose.Schema({
    email: String,
    password: String,
    username: String,
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
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
});

const Account = mongoose.model("Account", accountSchema, "account");

//CRUD

const findAccounts = async() => {
  return await Account.find({});
  //db.accounts.find()  
};

const create = async (data) => {
    //data vi e isto kako req.body
    const account = new Account(data);
    return await account.save();
    //db.accounts.insertOne()
};

const update = async (id, data) => {
    return await Account.updateOne({ _id: id }, data);
    //db.accounts.updateOne()
};

const remove = async (id) => {
    return await Account.deleteOne({ _id: id});
}

module.exports = {
    findAccounts,
    create,
    update,
    remove
};