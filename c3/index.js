const express = require("express");
const {
    getAllUsers,
    getSortedByName,
    getOneUser,
    getUserByEmail,
    createUser,
    updateUser,
    removeUser,
} = require("./controllers/user")
const {
    getAccounts,
    createAccount,
    updateAccount,
    removeAccount
} = require("./controllers/account")

require("./db/mongo-config"); //ke ja izvrsi funkcijata connect()

const app = express();

app.use(express.json()); // koga sakate da prakate podatoci vo json, mora da koristite express.json()

app.get("/", (req, res) => {
    res.write("Hello Students of SEMOS");
    res.end();
});

app.get("/users", getAllUsers);
app.get("/users/sorted", getSortedByName);
app.get("/users/:id", getOneUser);
app.get("/users/email/:email", getUserByEmail);
app.post("/users", createUser);
app.put("/users/:id", updateUser);
app.delete("/users/:id", removeUser);

app.get("/accounts", getAccounts);
app.post("/accounts", createAccount);
app.put("/accounts/:id", updateAccount);
app.delete("/accounts/:id", removeAccount);

app.listen(8080, (err) => {
    console.log("Server started on 8080!");
    if(err){
        console.log(err);
    }
});