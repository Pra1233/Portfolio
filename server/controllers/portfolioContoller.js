const Sib = require("sib-api-v3-sdk");
require("dotenv").config();
const sendEmailController = async (req, res) => {
  const { name, email, msg } = req.body;

  //validation
  if (!name || !email || !msg) {
    return res.status(500).send({
      success: false,
      message: "Please Provide All Fields",
    });
  }
  //email matter
  const client = Sib.ApiClient.instance;
  let apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.API;
  const transEmailAPI = new Sib.TransactionalEmailsApi();
  const sender = {
    email: email,
    name: name,
  };

  const emailContent = {
    subject: "HIRE ME",
    htmlContent: "<html><body>" + msg + "</body></html>",
    sender: sender,
    to: [{ email: "prabhatsingh5725@gmail.com" }], // Replace with recipient's email
  };

  try {
    const response = await transEmailAPI.sendTransacEmail(emailContent);
    console.log("Email sent successfully:", response);
    return res.status(200).send({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).send({
      success: false,
      message: "Error sending email",
      error: error,
    });
  }
};
module.exports = { sendEmailController };
