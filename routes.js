// const express = require("express");
let router = require("express").Router();
// const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

// router.post("/send-agreement", function(req, res) {
//   console.log(req.body);
// }

router.post("/send", function(req, res) {
  console.log("I made it to the post function");
  console.log(req.body);
  let comment = req.body.comment;
  let email = req.body.email;
  let phone = req.body.phone;
  let first = req.body.firstName;
  let last = req.body.lastName;
  let location = req.body.location;
  let date = req.body.date;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // host: "smtp.gmail.com",
    // port: 465,
    // secure: true, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "bowandtieeventswa@gmail.com",
      // user: testAccount.user, //FULL EMAIL  // generated ethereal user
      pass: "Kennyandcort"
      // pass: testAccount.pass //FULL PASSWORD generated ethereal password
    }
  });

  const mailOutline = {
    // sender address
    from: email,
    // list of receivers
    to: process.env.USERNAME,
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
      // res.send(err);
    }
    // console.log(info);
    // res.redirect("/");
    // res.download("/contactPage.pdf")
  });
});

router.get("/portfolio", function(req, res) {
  let arrName = req.body.arr;

  console.log(arrName);
});

// main().catch("The email did not send: ", console.error);
module.exports = router;
