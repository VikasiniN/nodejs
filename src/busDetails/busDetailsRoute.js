var busDetailsMgr = require("./busDetailsMgr");

module.exports = function(app) {
  app
    .route("/createbusdetails") //  Add Bus Details
    .post(busDetailsMgr.createBusDetails);

  app
    .route("/getallbusdetails") // Get All Bus Details
    .get(busDetailsMgr.getAllBusDetails);

  app
    .route("/busdetails/:id") // Get single Bus Details
    .get(busDetailsMgr.getSingleBusDetails);

  app
    .route("/editbusdetails/:id") // Edit  Bus Details
    .put(busDetailsMgr.editBusDetails);

  app
    .route("/removebusdetails/:id") // Get single Bus Details
    .delete(busDetailsMgr.removeBusDetails);
};
