var bookingMgr = require("./bookingMgr");

module.exports = function(app) {
  // create bookings
  app.route("/createbooking").post(bookingMgr.createBooking);

  // get all bookings
  app.route("/getallbookings").get(bookingMgr.getAllBooking);

  // get single booking
  app.route("/getbookings/:id").get(bookingMgr.getSingleBooking);
  // send invoice

  app.route("/sendinvoice").post(bookingMgr.sendInvoice);
};
