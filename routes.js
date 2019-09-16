// const express = require("express");
let router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");

router.post("/send", function(req, res) {
  // console.log("I made it to the post function");
  console.log(req.body);
  let comment = req.body.comment;
  let email = req.body.email;
  let phone = req.body.phone;
  let first = req.body.firstName;
  let last = req.body.lastName;
  let location = req.body.location;
  let date = req.body.date;
  // return; for debugging
  // async..await is not allowed in global scope, must use a wrapper
  // async function main() {
  //   // Generate test SMTP service account from ethereal.email
  //   // Only needed if you don't have a real mail account for testing
  //   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    host: "smtp.gmail.com",
    port: 465,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "bowandtieeventswa@gmail.com",
      // user: testAccount.user, //FULL EMAIL  // generated ethereal user
      pass: "Kenny&cort!"
      // pass: testAccount.pass //FULL PASSWORD generated ethereal password
    }
  });

  const mailOutline = {
    from: email, // sender address
    to: "bowandtieeventswa@gmail.com", // list of receivers
    subject: "New Client: " + first + " " + last, // Subject line
    // text: "Hello world?", // plain text body
    html: `<ul><li>Name: ${first + " " + last}</li> 
      <li>Phone: ${phone}</li>
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

// main().catch("The email did not send: ", console.error);
module.exports = router;
