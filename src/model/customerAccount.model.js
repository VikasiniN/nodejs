var mongoose = require("mongoose");
const CustomerDetailsSchema = new mongoose.Schema({
  emailId: String,
  mobileNumber: Number,
  password: String,
  firstName: String,
  lastName: String
});
const Customerdetails = mongoose.model(
  "customerAccount",
  CustomerDetailsSchema
);
module.exports = Customerdetails;
