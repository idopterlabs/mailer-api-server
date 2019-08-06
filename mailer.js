const nodemailer = require('nodemailer');
const user = process.env.MAILER_USER;
const pass = process.env.MAILER_PASSWORD;

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(destination) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false,
    auth: { user, pass }
  });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: destination,
    subject: 'Hello ✔', // Subject line
    html: `<b>Olá!</b>
    <p>Temos muito interesse em ouvir sobre a sua idéia. Etc etc<p>`
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = sendEmail;

