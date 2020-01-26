var couponDA = require("./couponDA");

exports.createCoupon = function(req, res) {
  try {
    couponDA.createCoupon(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.getAllCouponDetails = function(req, res) {
  try {
    couponDA.getAllCouponDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCouponDetails = function(req, res) {
  try {
    couponDA.deleteCouponDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.updateCouponDetails = function(req, res) {
  try {
    couponDA.updateCouponDetails(req, res);
  } catch (error) {
    console.log(error);
  }
};
