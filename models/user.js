const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/categoryCrud");

const userSchema = mongoose.Schema({
  categoryName: {
    type: String,
  },
  categoryDescription: {
    type: String,
  },
});

module.exports = mongoose.model("user", userSchema);
