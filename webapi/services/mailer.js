const nodemailer = require('nodemailer');
const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
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