// const nodemailer = require("nodemailer");
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: "mailer@splendourinstone.com.au",
        pass: "+1:xA970=9=Touy7TzIi",
    },
});
const sendEmail = async () => {
    const mailOptions = {
        from: "noreply@vtbazaar.net",
        to: "sherehiyandriy@gmail.com",
        subject: "This is email test",
        html: "",
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('email sent successfully.');
    } catch (error) {
        console.error(`Error sending email:`, error);
    }
};

module.exports = sendEmail;
