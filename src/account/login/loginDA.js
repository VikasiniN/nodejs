var masterAccount = require("../../model/masterAccount.model");
var adminAccount = require("../../model/adminAccount.model");
var customerDetails = require("../../model/customerAccount.model");

exports.login = function(req, res) {
  masterAccount
    .find({
      emailId: req.body.emailId,
      password: req.body.password,
      role: "customer"
    })
    .select()
    .exec(function(err, loginData) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(loginData);
      }
    });
};

exports.adminAccount = function(req, res) {
  masterAccount
    .find({
      emailId: req.body.emailId,
      password: req.body.password,
      role: "admin"
    })
    .select()
    .exec(function(err, findData) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(findData);
      }
    });
};
exports.customerDetails = function(req, res) {
  customerDetails
    .findOne({
      _id: req.params.id
    })
    .select()
    .exec(function(err, customerData) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(customerData);
      }
    });
};
