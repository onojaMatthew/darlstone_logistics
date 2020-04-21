const nodemailer = require('nodemailer');
require("dotenv").config();

const transport = {
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true, // use TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false
  }
}

let transporter = nodemailer.createTransport(transport);

module.exports = (name, to, subject, content) => {

  transporter.verify((error, success) => {
    if (error) {
      console.log(error);
    } else {
      console.log(success + 'Server ready to receive message');
    }
  });
  
  const mail = {
    from: name,
    to,
    subject,
    text: content
  }
  
  return transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log({ message: err.message });
    } else {
      console.log({ message: data});
    }
  });
}