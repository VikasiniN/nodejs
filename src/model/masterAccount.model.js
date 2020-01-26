var mongoose = require("mongoose");

const AccountDetailsSchema = new mongoose.Schema({
  emailId: String,
  password: String,
  role: String,
  customerId: String
});
const AccountDetails = mongoose.model("masterAccount", AccountDetailsSchema);
module.exports = AccountDetails;
