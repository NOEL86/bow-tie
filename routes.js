const express = require("express");
let router = express.Router();
const path = require("path");
const nodemailer = require("nodemailer");

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// }); THIS DID NOT WORK FOR ME... DO I NEED THIS???

//pass in user info and create an email
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
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      // host: "bowandtieeventswa@gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, //FULL EMAIL  // generated ethereal user
        pass: testAccount.pass //FULL PASSWORD generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: email, // sender address
      to: "bar@example.com", // list of receivers
      subject: first + "" + last, // Subject line
      // text: "Hello world?", // plain text body
      html: `<ul><li>${first + "" + last}</li> 
      <li>${phone}</li>
      <li>${date}</li>
      <li>${location}</li>
      <li>${comment}</li></ul>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // res.send() a message to the user that the message was sent
  }

  main().catch(console.error);
});
module.exports = router;
