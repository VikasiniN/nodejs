var mongoose = require("mongoose");

var CouponSchema = new mongoose.Schema({
  couponName: String,
  couponDescription: String,
  priceLimit: Number,
  amountToDeduct: Number
});

var Coupon = mongoose.model("coupon", CouponSchema);
module.exports = Coupon;
