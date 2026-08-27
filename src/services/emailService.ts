import emailjs from "@emailjs/browser";

export const sendEmail = async (form: { name: string; email: string; message: string }) => {
  try {
    const result = await emailjs.send(
      "service_izrnvxq", // Service ID
      "template_97w3ixr", // Template ID
      {
        from_name: form.name,
        to_name: "Daniel Palma",
        from_email: form.email,
        to_email: "dannypalmadev@gmail.com",
        message: form.message,
      },
      "Tb6HjCSh_6ES_LNk-" // Public Key
    );
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};