const express = require('express');
const app = express();
const port = 3001;
const nodemailer = require('nodemailer');

app.use('/mail/:email/:link', (req, res) => {
  var mailOptions = {
    from: 'jasonmailerpractice@gmail.com',
    to: req.params.email,
    subject: 'Sending Email using Node.js',
    html: `<html>
    <head>
    <meta charset="utf-8">
    </head>
    <body>  
    <h2>LOGO</h2>
<h1> Thank you for signing up for our <br> 
inventory services.
<br>Follow this link to copmplete signing up <a href="http://localhost:3000/signup/${req.params.email}/${req.params.link}" >link</a>!</h1>
    </body>
    </html>`
  };

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
