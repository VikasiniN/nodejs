var mongoose = require("mongoose");

const adminAccountSchema = new mongoose.Schema({
  emailId: String,
  password: String
});
const adminAccount = mongoose.model("adminaccount", adminAccountSchema);
module.exports = adminAccount;
