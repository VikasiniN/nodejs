var registrationDA = require("./registrationDA");
var s3 = require("../../config/s3.config");
var env = require("../../config/s3.env");
var zeroFill = require("zero-fill");

exports.createCustomer = function(req, res) {
  try {
    registrationDA.createCustomer(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCustomer = function(req, res) {
  try {
    registrationDA.getAllCustomer(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.createAdminAccount = function(req, res) {
  try {
    registrationDA.createAdminAccount(req, res);
  } catch (error) {
    console.log(error);
  }
};
