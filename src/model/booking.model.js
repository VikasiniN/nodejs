var mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: String,
  customerId: String,
  couponName: String,
  couponId: String,
  date: Date,
  busId: String,
  busDetails: String,
  customerEmailID: String
});

const bookings = mongoose.model("bookingDetails", bookingSchema);
module.exports = bookings;
