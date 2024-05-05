const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "nodejs16-projetest@outlook.com",
    pass: '0kR95"s.f3v@',
  },
});

module.exports = transporter;