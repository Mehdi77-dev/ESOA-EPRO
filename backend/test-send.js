require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const mailOptions = {
  from: `"Inscriptions ESOA EPRO" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
  subject: `🎓 Nouvelle Inscription : Test`,
  html: '<h1>Test</h1>'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("sendMail error:", error);
  } else {
    console.log("sendMail success:", info.response);
  }
});
