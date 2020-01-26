var mongoose = require("mongoose");

const busDetailsSchema = new mongoose.Schema({
  busNumber: String,
  price: Number,
  busDetails: String,
  pickup: String,
  destination: String
});

const busDetails = mongoose.model("busDetails", busDetailsSchema);
module.exports = busDetails;
