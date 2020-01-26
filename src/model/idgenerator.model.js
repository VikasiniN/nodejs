var mongoose = require("mongoose");

const IDgeneratorSchema = new mongoose.Schema({
  lastDigit: { type: String, default: "10001" }
});

const IDgenerator = mongoose.model("IDgenerator", IDgeneratorSchema);
module.exports = IDgenerator;
