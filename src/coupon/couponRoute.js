var couponMgr = require("./couponMgr");

module.exports = function(app) {
  app
    .route("/createcoupon") // Create a coupon
    .post(couponMgr.createCoupon);

  app
    .route("/getcoupondetails") // Get All Coupon Details
    .get(couponMgr.getAllCouponDetails);

  app
    .route("/deletecoupon/:id") // Delete the coupon
    .delete(couponMgr.deleteCouponDetails);

  app
    .route("/editcoupon/:id") // Edit  Coupon Details
    .put(couponMgr.updateCouponDetails);
};
