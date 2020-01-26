var registrationMgr = require("./registration/registrationMgr");
var loginMgr = require("./login/loginMgr");

module.exports = function(app) {
  //   Accounts Module

  app
    .route("/createcustomer") //  Customer Registration
    .post(registrationMgr.createCustomer);

  app
    .route("/createadminaccount") //  Admin Registration
    .post(registrationMgr.createAdminAccount);

  app
    .route("/customerlogin") //   Customer Login
    .post(loginMgr.login);

  app
    .route("/loginadminuser") //   Admin Login
    .post(loginMgr.adminAccount);

  app
    .route("/getallcustomer") // Get All Customer Details
    .get(registrationMgr.getAllCustomer);
};
