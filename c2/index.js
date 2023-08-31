const mongoose = require("mongoose");
//Mongoose is an Object-Document Mapping (ODM) library for MongoDB and Node.js
//Key features:
//1. Schema definition - ni ovozmozuva da napravime semi za nasite podatoci
//Mozeme da gi definirame polinjata, nivnite tipovi, pravila za validacija, default vrednosti itn..
//2. Model creation - stom definirame sema, moze da kreirame i model koristejki go Mongoose
// Model - toa vi e konstruktor sto se sovpaga (interacts) so specificna MongoDB kolekcija
// vo zavisnost od definirana sema
//3. Data validation - ako podatocite ne odgovaraat na toa sto e definirano vo semata ili vo modelot,
// da ne se vnesuvaat.
const User = require("./user");

mongoose
  .connect(
    "mongodb+srv://viktorj560:1234@mongodb-g3.evm2fxk.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

  async function run() {
    //POST baranje
    //req.body.name i req.body.age
      // const user = new User({ name: "Viktor", age: 200 }); //podatocite bi stignale od req.body
      // await user.save();
  
    //HINT if you want to test out Accounts
    const foundUser = await User.findOne({
      name: "Viktor",
      age: 200,
    });
  
    console.log("user found", foundUser);
  }
  
  run();