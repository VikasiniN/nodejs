var bookingDA = require("./bookingDA");
var IDgenerator = require("../model/idgenerator.model");
var nodemailer = require("nodemailer");
exports.createBooking = function(req, res) {
  try {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var date = day + "/" + month + "/" + year;

    var oYear = year.toString();
    var orderYear = oYear.slice(-2);
    var order = "BOO";
    var locale = "en-us";
    var result = currentDate.toLocaleString(locale, {
      month: "long"
    });
    var orderMonth = result.substr(0, 3).toUpperCase();

    IDgenerator.find({})
      .select()
      .exec(function(err, details) {
        if (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving notes."
          });
        } else {
          if (details.length === 0) {
            IDgenerator = new IDgenerator();
            IDgenerator.save(function(err, save) {
              if (err) {
                res.status(500).json(err);
              } else {
                var bookingID = order + orderYear + orderMonth + save.lastDigit;
                bookingDA.createBooking(
                  req,
                  res,
                  bookingID,
                  save.lastDigit,
                  save.lastDigit
                );
              }
            });
          } else {
            let oldDigit = Number(details[0].lastDigit);
            var lastDigit = ++oldDigit;
            var bookingID =
              order + orderYear + orderMonth + lastDigit.toString();
            bookingDA.createBooking(req, res, bookingID, oldDigit, lastDigit);
          }
        }
      });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllBooking = function(req, res) {
  try {
    bookingDA.getAllBooking(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.getSingleBooking = function(req, res) {
  try {
    bookingDA.getSingleBooking(req, res);
  } catch (error) {
    console.log(error);
  }
};

exports.sendInvoice = function(req, res) {
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtpout.secureserver.net",
      secureConnection: true,
      port: 465,
      auth: {
        user: "developergirl09@gmail.com",
        pass: "BackEndDeveloper@123"
      },
      debug: true
    });
    var mailOptions = {
      from: "developergirl09@gmail.com",
      to: "vikasininithi@gmail.com",
      subject: "Bookings",
      attachments: [
        {
          filename: `file.pdf`,
          content: "hello",
          encoding: "base64",
          contentType: "application/pdf"
        }
      ]
    };
    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
