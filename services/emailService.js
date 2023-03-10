const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  let transPorter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  let info = await transPorter.sendMail({
    from:`inshare <${from}>`,
    to,
    subject,
    text,
    html,
  });
}

module.exports = sendMail;
