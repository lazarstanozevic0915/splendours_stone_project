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
const sendEmail = async (email, token, url, emailType) => {
  let mailOptions = {
    from: "noreply@vtbazaar.net",
    to: email,
    subject: "",
    html: "",
  };
  if (emailType === "verification") {
    mailOptions.subject = "Verify Your Email - VT Bazaar";
    mailOptions.html = `
            <p>Dear user,</p>
            <p>Thank you for choosing VT Bazaar. To complete your registration and enhance the security of your account, please click the link below to verify your email address:</p>
            <p><a href="http://api.vtbazaar.net/api/v1/auth/verify/${token}">Verify Your Email Address</a></p>
            <p>If you did not sign up for an account on VT Bazaar, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The VT Bazaar Team</p>
        `;
  } else if (emailType === "resetPassword") {
    mailOptions.subject = "Reset Your Password - VT Bazaar";
    mailOptions.html = `
            <p>Dear user,</p>
            <p>You have requested to reset your password. Please click the link below to set a new password:</p>
            <p><a href="${url}/reset-password?token=${token}&email=${email}">Reset Your Password</a></p>
            <p>If you did not request a password reset, please ignore this email or contact support if you have concerns about unauthorized activity on your account.</p>
            <p>Best regards,</p>
            <p>The VT Bazaar Team</p>
        `;
  }

  try {
    await transporter.sendMail(mailOptions);
    console.log(`${emailType} email sent successfully to ${email}.`);
  } catch (error) {
    console.error(`Error sending ${emailType} email:`, error);
  }
};

module.exports = sendEmail;
