require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendThankYouEmail = async (toEmail, userName) => {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: toEmail,
            subject: "Thank You for Contacting Us!",
            text: `Good morrow, ${userName},\n\nI doth thank thee most graciously for thy kind missive. Verily, thy message hath been received, and I shall attend to it anon.\n\nWith sincerest regards,\nThy Devoted Brotheren!`

        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendThankYouEmail;
