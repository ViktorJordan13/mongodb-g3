const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    hobbies: [String],
    address: addressSchema,
});

module.exports = mongoose.model("User", userSchema, "user");

//Primer za validacija na vnesni podatoci sprema semata sto sme ja napravile
const userSchemaValidate = mongoose.Schema({
  name: {
    type: String,
    required: true, //field is required
    minlenght: 2,
    maxlenght: 50
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  }
})

const UserValidate = mongoose.model("UserValidate", userSchemaValidate)

//Primer za insertiranje dokument sto odgovara nasemata i pravilata za validacija

// const validUser = new UserValidate({
//   name: "Anja",
//   age: 20,
//   email: "anja@semos.com"
// });
// validUser.save();

// const invalidUser = new User ({
//   name: "B",
//   age: 150
// });
// invalidUser.save( err => {
//   console.error(err.message);
// })