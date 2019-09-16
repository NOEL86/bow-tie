// const express = require("express");
let router = require("express").Router();
const path = require("path");
const nodemailer = require("nodemailer");

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });

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
  async function main() {
    //   // Generate test SMTP service account from ethereal.email
    //   // Only needed if you don't have a real mail account for testing
    //   let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: "smtp.ethereal.email",
      host: "smtp.gmail.com",
      // port: 587,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "bowandtieeventswa@gmail.com",
        // user: testAccount.user, //FULL EMAIL  // generated ethereal user
        pass: "Kennyandcort"
        // pass: testAccount.pass //FULL PASSWORD generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: "bar@example.com", // list of receivers
      subject: first + " " + last, // Subject line
      // text: "Hello world?", // plain text body
      html: `<ul><li>Name: ${first + " " + last}</li> 
      <li>Phone: ${phone}</li>
      <li>Date: ${date}</li>
      <li>Location: ${location}</li>
      <li>Comments: ${comment}</li></ul>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.send() a message to the user that the message was sent
    res.json({ sent: "Message Sent Successfully!" }).end();
  }

  main().catch("The email did not send: ", console.error);
});
module.exports = router;
