var mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  bookingId: String,
  customerId: String,
  couponName: String,
  couponId: String,
  date: Date,
  busId: String,
  busDetails: String,
  customerEmailID: String,
  seatNo: String,
  price: Number,
  amountDeducted: Number
});

const bookings = mongoose.model("bookingDetails", bookingSchema);
module.exports = bookings;
