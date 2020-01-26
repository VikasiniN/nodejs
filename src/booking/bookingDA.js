var Bookings = require("../model/booking.model");
var IDgenerator = require("../model/idgenerator.model");

exports.createBooking = function(req, res, bookingId, oldNum, newNum) {
  var bookings = new Bookings();
  bookings.bookingId = bookingId;
  bookings.customerId = req.body.customerId;
  bookings.couponName = req.body.couponName;
  bookings.couponId = req.body.couponId;
  bookings.date = new Date();
  bookings.busId = req.body.busId;
  bookings.busDetails = req.body.busDetails;
  bookings.customerEmailID = req.body.customerEmailID;
  bookings.save(function(err, data) {
    if (err) {
      res.status(500).json(err);
    } else {
      const prevID = oldNum.toString();
      const nextID = newNum.toString();
      IDgenerator.updateOne(
        { lastDigit: prevID },
        { lastDigit: nextID },
        function(err, saveId) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(saveId);
          }
        }
      );
    }
  });
};

exports.getAllBooking = function(req, res) {
  Bookings.find({})
    .select()
    .exec(function(err, bookingData) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(bookingData);
      }
    });
};

exports.getSingleBooking = function(req, res) {
  Bookings.findOne({
    _id: req.params.id
  })
    .select()
    .exec(function(err, bookingDetails) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(bookingDetails);
      }
    });
};

exports.sendInvoice = function(req, res) {
  try {
    bookingDA.sendInvoice(req, res);
  } catch (error) {
    console.log(error);
  }
};
