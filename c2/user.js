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