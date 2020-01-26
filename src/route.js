var accountRoute = require("./account/accountRoute");
var busDetailsRoute = require("./busDetails/busDetailsRoute");
var couponRoute = require("./coupon/couponRoute");
var bookingRoute = require("./booking/bookingRoute");

exports.loadRoutes = function(app) {
  accountRoute(app);
  busDetailsRoute(app);
  couponRoute(app);
  bookingRoute(app);
};
