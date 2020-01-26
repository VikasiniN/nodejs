var busDetails = require("../model/busDetails.model");

exports.createBusDetails = function(req, res) {
  var bus = new busDetails();
  bus.busNumber = req.body.busNumber;
  bus.busDetails = req.body.busDetails;
  bus.pickup = req.body.pickup;
  bus.destination = req.body.destination;
  bus.price = req.body.price;
  bus.save(function(err, saveData) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(saveData);
    }
  });
};

exports.getAllBusDetails = function(req, res) {
  busDetails
    .find({})
    .select()
    .exec(function(err, data) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(data);
      }
    });
};

exports.getSingleBusDetails = function(req, res) {
  busDetails
    .findOne({
      _id: req.params.id
    })
    .select()
    .exec(function(err, singleBusDetails) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(singleBusDetails);
      }
    });
};

exports.editBusDetails = function(req, res) {
  busDetails
    .findOne({
      _id: req.params.id
    })
    .select()
    .exec(function(err, singleBusDetails) {
      if (err) {
        res.status(500).json(err);
      } else {
        singleBusDetails.busNumber = req.body.busNumber;
        singleBusDetails.busDetails = req.body.busDetails;
        singleBusDetails.pickup = req.body.pickup;
        singleBusDetails.destination = req.body.destination;
        singleBusDetails.price = req.body.price;
        singleBusDetails.save(function(err, updatedData) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(updatedData);
          }
        });
      }
    });
};

exports.removeBusDetails = function(req, res) {
  busDetails
    .findByIdAndRemove({
      _id: req.params.id
    })
    .select()
    .exec(function(err, singleBusDetails) {
      if (err) {
        res.status(500).json(err);
      } else {
        busDetails
          .find({})
          .select()
          .exec(function(err, data) {
            if (err) {
              res.status(500).json(err);
            } else {
              res.status(200).json(data);
            }
          });
      }
    });
};
