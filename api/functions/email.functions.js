exports.transporter = () => {
  const nodemailer = require("nodemailer");
  const result = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  return(result);
};
