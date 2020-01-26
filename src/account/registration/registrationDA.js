var customerDetails = require("../../model/customerAccount.model");
var masterAccount = require("../../model/masterAccount.model");

exports.createCustomer = function(req, res) {
  customerDetails
    .find({
      emailId: req.body.emailId
    })
    .select()
    .exec(function(err, findData) {
      if (err) {
        res.status(500).json(err);
      } else {
        if (findData.length !== 0) {
          res.status(200).send({
            result: "Already exist"
          });
        } else {
          var create = new customerDetails();
          create.emailId = req.body.emailId;
          create.mobileNumber = req.body.mobileNumber;
          create.password = req.body.password;
          create.save(function(err, customerData) {
            if (err) {
              res.status(500).json(err);
            } else {
              var createMaster = new masterAccount();
              createMaster.emailId = req.body.emailId;
              createMaster.password = req.body.password;
              createMaster.customerId = customerData._id;

              createMaster.role = "customer";
              createMaster.save(function(err, masterData) {
                if (err) {
                  res.status(500).json(err);
                } else {
                  res.status(200).json(masterData);
                }
              });
            }
          });
        }
      }
    });
};

exports.getAllCustomer = function(req, res) {
  customerDetails
    .find({})
    .select()
    .sort({ date: -1 })
    .exec(function(err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(data);
      }
    });
};

exports.createAdminAccount = function(req, res) {
  var create = new masterAccount();
  create.emailId = req.body.emailId;
  create.password = req.body.password;
  create.role = "admin";
  create.save(function(err, saveData) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(saveData);
    }
  });
};
