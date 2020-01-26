var Coupon = require("../model/coupon.model");

exports.createCoupon = function(req, res) {
  var coupon = new Coupon();
  coupon.couponName = req.body.couponName;
  coupon.couponDescription = req.body.couponDescription;
  coupon.priceLimit = req.body.priceLimit;
  coupon.amountToDeduct = req.body.amountToDeduct;
  coupon.save(function(err, saveData) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(saveData);
    }
  });
};

exports.getAllCouponDetails = function(req, res) {
  Coupon.find({})
    .select()
    .exec(function(err, coupondata) {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(coupondata);
      }
    });
};

exports.deleteCouponDetails = function(req, res) {
  Coupon.findByIdAndRemove({
    _id: req.params.id
  })
    .select()
    .exec(function(err, couponDetails) {
      if (err) {
        res.status(500).json(err);
      } else {
        Coupon.find({})
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

exports.updateCouponDetails = function(req, res) {
  Coupon.findById({ _id: req.params.id })
    .select()
    .exec(function(err, couponData) {
      if (err) {
        res.status(500).json(err);
      } else {
        couponData.couponName = req.body.couponName;
        couponData.couponDescription = req.body.couponDescription;
        couponData.priceLimit = req.body.priceLimit;
        couponData.amountToDeduct = req.body.amountToDeduct;
        couponData.save(function(err, updatedData) {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(updatedData);
          }
        });
      }
    });
};
