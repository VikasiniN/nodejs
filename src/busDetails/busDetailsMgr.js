var busDetailsDA = require("./busDetailsDA");

exports.createBusDetails = function(req, res) {
  try {
    busDetailsDA.createBusDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllBusDetails = function(req, res) {
  try {
    busDetailsDA.getAllBusDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleBusDetails = function(req, res) {
  try {
    busDetailsDA.getSingleBusDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.editBusDetails = function(req, res) {
  try {
    busDetailsDA.editBusDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.removeBusDetails = function(req, res) {
  try {
    busDetailsDA.removeBusDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};
