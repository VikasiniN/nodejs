var mongoose = require("mongoose");

const ReferAndEarnSchema = new mongoose.Schema({
  couponName: String,
  couponDescripton: String,
  referrerPercentage: Number,
  applierPercetage: Number,
  countOfApplier: Number,
  startDate: Date,
  endDate: Date,
  createdDate: { type: Date, default: Date.now() },
  modifiedDate: { type: Date, default: Date.now() },
  customerCouponDetails: [
    {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customerdetails"
      },
      randomCoupon: String
    }
  ],
  applyCustomerDetails: [
    {
      customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customerdetails"
      },
      count: Number
    }
  ]
});

const referAndEarn = mongoose.model("referandearn", ReferAndEarnSchema);
module.exports = referAndEarn;
