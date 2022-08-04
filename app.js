const express = require('express');
const app = express();
const port = 3001;
const nodemailer = require('nodemailer');

app.use('/mail', (req, res) => {
  res.send('Hello World!');
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'jasonmailerpractice@gmail.com',
    pass: 'chhygzymnnlvhzrq'
  }
});

var mailOptions = {
  from: 'jasonmailerpractice@gmail.com',
  to: 'lemondsun@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
