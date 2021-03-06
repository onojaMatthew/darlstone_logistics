const nodemailer = require('nodemailer');
require("dotenv").config();

const transport = {
  
}

let transporter = nodemailer.createTransport(transport);

module.exports = async (name, to, subject, content) => {

  // transporter.verify((error, success) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(success + 'Server ready to receive message');
  //   }
  // });
  
  // const mail = {
  //   from: name,
  //   to,
  //   subject,
  //   text: content
  // }
  
  // return transporter.sendMail(mail, (err, data) => {
  //   if (err) {
  //     console.log({ message: err.message });
  //   } else {
  //     console.log({ message: data});
  //   }
  // });

  
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587, // 465,
      secure: false, // use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      // host: "smtp.ethereal.email",
      // port: 587,
      // secure: false, // true for 465, false for other ports
      // auth: {
      //   user: testAccount.user, // generated ethereal user
      //   pass: testAccount.pass // generated ethereal password
      // }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: name, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: content, // plain text body
      // html: content // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  
}