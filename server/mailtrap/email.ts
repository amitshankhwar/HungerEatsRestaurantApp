import {
  generatePasswordResetEmailHtml,
  generateResetSuccessEmailHtml,
  generateWelcomeEmailHtml,
  htmlContent,
} from "./htmlEmail";
import { client, sender } from "./mailtrap";

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  console.log(email, sender);

  const recipient = [
    {
      email,
    },
  ];

  try {
    const res = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: htmlContent.replace("{verificationToken}", verificationToken),
      category: "Email Verification",
    });
  } catch (error) {
    error;
    throw new Error("failed to send verification email!!");
  }
};

export const welcomeEmail = async (email: string, name: string) => {
  const recipient = [
    {
      email,
    },
  ];

  try {
    let htmlContent = generateWelcomeEmailHtml(name);
    const res = await client.send({
      from: sender,
      to: recipient,
      subject: "Welcome to Hunger Eats..",
      html: htmlContent,
      template_variables: {
        company_info_name: "Hunger Eats",
        name: name,
      },
    });
  } catch (error) {
    error;
    throw new Error("failed to send welcome email!!");
  }
};

export const sendPasswordResetEmail = async (
  email: string,
  resetURL: string
) => {
  const recipient = [
    {
      email,
    },
  ];

  try {
    let htmlContent = generatePasswordResetEmailHtml(resetURL);
    const res = await client.send({
      from: sender,
      to: recipient,
      subject: "Reset Your Password",
      html: htmlContent,
      category: "Reset Password",
    });
  } catch (error) {
    error;
    throw new Error("failed to send reset password email!!");
  }
};

export const sendResetSuccessEmail = async (email: string) => {
  const recipient = [
    {
      email,
    },
  ];

  try {
    let htmlContent = generateResetSuccessEmailHtml();
    const res = await client.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successfully",
      html: htmlContent,
      category: "Password Reset",
    });
  } catch (error) {
    error;
    throw new Error("failed to reset password success email!!");
  }
};
