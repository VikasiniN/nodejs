var loginDA = require("./loginDA");

exports.login = function(req, res) {
  try {
    loginDA.login(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.adminAccount = function(req, res) {
  try {
    loginDA.adminAccount(req, res);
  } catch (error) {
    console.log(error);
  }
};
