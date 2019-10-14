let router = require("express").Router();
// const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

function agreement() {
  router.post("/send-agreement", function(req, res) {
    // console.log("I made it to the post function");
    console.log(req.body);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: proccess.env.USERNAME,
        // user: testAccount.user, //FULL EMAIL  // generated ethereal user
        pass: process.env.PASS
        // pass: testAccount.pass //FULL PASSWORD generated ethereal password
      }
    });

    const mailOutline = {
      // sender address
      from: email,
      // list of receivers
      to: proccess.env.USERNAME,
      // Subject line
      subject: "Client: " + first + " " + last,
      // plain text body
      html: `<ul><li>Name: ${first + " " + last}</li> 
        <li>Phone: ${phone}</li>
        <li>Mail: ${email}</li>
        <li>Date: ${date}</li>
        <li>Location: ${location}</li>
        <li>Comments: ${comment}</li></ul>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOutline, (err, info) => {
      if (err) {
        console.log("Error Message: ", err);
      }
      console.log(info);
      res.redirect("/");
    });
  });
}

// main().catch("The email did not send: ", console.error);
module.exports = agreement;
