// tslint:disable-next-line:no-implicit-dependencies
import * as nodemailer from "nodemailer";

type MessageType = "confirmEmail" | "forgotPassword";

export const sendEmail = async (
  recipient: string,
  url: string,
  messageType: MessageType
) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "z4tpjgvql7qk4h2r@ethereal.email",
      pass: "DGHQ1PQ8FX22TZZyKp"
    }
  });

  const messages = (t: MessageType) => {
    switch (t) {
      case "confirmEmail":
        return `<html>
    <body>
    <p>Testing Vaster - the world's most awesomest local delivery service!</p>
    <a href="${url}">Confirm email</a>
    </body>
    </html>`;
      case "forgotPassword":
        return `<html>
    <body>
    <p>Testing Vaster - the world's most awesomest local delivery service!</p>
    <a href="${url}">Reset password</a>
    </body>
    </html>`;
    }
  };

  const message = {
    from: "Sender Name <sender@example.com>",
    to: `Recipient <${recipient}>`,
    subject: "Nodemailer is unicode friendly ✔",
    text: "Hello new user!",
    html: messages(messageType)
  };

  transporter.sendMail(message, (err, info) => {
    if (err) {
      console.log("Error occurred. " + err.message);
    }

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  // console.log(response);
};
